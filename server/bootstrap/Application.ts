import { ApiServer } from '../api/ApiServer';
import { ConfigService } from '../config/ConfigService';
import { ApiConstants } from '../constants/ApiConstants';
import { ApplicationConstants } from '../constants/ApplicationConstants';
import { ApplicationMessages } from '../constants/ApplicationMessages';
import { ApplicationStatusMessages } from '../constants/ApplicationStatusMessages';
import { DatabaseInitializer } from '../database/DatabaseInitializer';
import { HealthCheckService } from '../services/HealthCheckService';
import { ScanService } from '../services/scanner/ScanService';
import { ApplicationStatus } from '../types/ApplicationStatus';
import { StartupChecks } from './StartupChecks';

export class Application {
  private configService = new ConfigService();
  private startupChecks = new StartupChecks();
  private scanService = new ScanService();
  private healthCheckService = new HealthCheckService();
  private apiServer = new ApiServer();
  private databaseInitializer =
    new DatabaseInitializer();

  async start() {
    console.log(
      `Starting ${ApplicationConstants.name}...`
    );

    const startupResult =
      await this.databaseInitializer.initialize();

    if (!startupResult.success) {
      console.log(startupResult.message);
      return;
    }

    const appConfig =
      this.configService.getAppConfig();

    const setupState = 
      await this.startupChecks.run();

    const health =
      await this.healthCheckService.getHealthStatus();

    const status: ApplicationStatus = {
      health,
      setupComplete: setupState.isConfigured,
      version: ApplicationConstants.version,
    };

    console.log(
      ApplicationStatusMessages.Starting
    );
    console.log(status);

    console.log(
      `Environment: ${appConfig.environment.name}`
    );

    const apiStatus = await this.apiServer.start({
      port: ApiConstants.DefaultPort,
    });

    console.log(
      ApplicationStatusMessages.ApiStatus
    );
    console.log(apiStatus);

    if (!status.setupComplete) {
      console.log(
        ApplicationMessages.NotConfigured
      );

      return;
    }

    const libraryConfig =
      await this.configService.getLibraryConfig();

    const scanSummary =
      await this.scanService.scan(
        libraryConfig.paths
      );

    console.log(
      ApplicationStatusMessages.ScanComplete
    );

    console.log(
      `Games Found: ${scanSummary.totalGames}`
    );

    console.log(
      `Platforms Found: ${scanSummary.totalPlatforms}`
    );

    console.log(
      `Libraries Scanned: ${scanSummary.scannedPaths}`
    );

    console.log(
      `New Games Added: ${scanSummary.newGames}`
    );

    console.log(
      `Games Skipped: ${scanSummary.skippedGames}`
    );
  }
}
