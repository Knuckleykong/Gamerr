import { ApiServer } from '../api/ApiServer';
import { ConfigService } from '../config/ConfigService';
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
    console.log('Starting Gamerr...');

    await this.databaseInitializer.initialize();

    const setupState = this.startupChecks.run();

    const health =
      await this.healthCheckService.getHealthStatus();

    const status: ApplicationStatus = {
      health,
      setupComplete: setupState.isConfigured,
      version: '0.1.0-alpha',
    };

    console.log('Application Status');
    console.log(status);

    const apiStatus = await this.apiServer.start({
      port: 5055,
    });

    console.log('API Status');
    console.log(apiStatus);

    if (!status.setupComplete) {
      console.log(
        'Gamerr is not configured. Please complete setup.'
      );

      return;
    }

    const libraryConfig =
      this.configService.getLibraryConfig();

    const scanSummary =
      await this.scanService.scan(
        libraryConfig.paths
      );

    console.log('Scan complete');

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
