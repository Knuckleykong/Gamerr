import { SetupService } from './SetupService';
import { DatabaseService } from './DatabaseService';
import { HealthStatus } from '../types/HealthStatus';

export class HealthCheckService {
  private setupService = new SetupService();
  private databaseService = new DatabaseService();

  async getHealthStatus(): Promise<HealthStatus> {
    const setupState =
      this.setupService.getSetupState();

    const databaseStatus =
      await this.databaseService.getStatus();

    const database =
      databaseStatus.connected;

    const configured =
      setupState.isConfigured;

    const ready =
      database &&
      configured &&
      setupState.hasLibraryPaths;

    return {
      database,
      configured,
      ready,
    };
  }
}
