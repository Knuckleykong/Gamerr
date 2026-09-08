import { ConfigService } from '../config/ConfigService';
import { StartupChecks } from './StartupChecks';
import { ScanService } from '../services/scanner/ScanService';

export class Application {
  private configService = new ConfigService();
  private startupChecks = new StartupChecks();
  private scanService = new ScanService();

  async start() {
    console.log('Starting Gamerr...');

    const setupState = this.startupChecks.run();

    if (!setupState.isConfigured) {
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
