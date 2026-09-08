import { ConfigService } from '../config/ConfigService';
import { StartupChecks } from './StartupChecks';
import { ScanService } from '../services/scanner/ScanService';
import { HealthCheckService } from '../services/HealthCheckService';
import { ApplicationStatus } from '../types/ApplicationStatus';

export class Application {
  private configService = new ConfigService();
  private startupChecks = new StartupChecks();
  private scanService = new ScanService();
  private healthCheckService = new HealthCheckService();

  async start() {
    console.log('Starting Gamerr...');

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
  }
}
