import { SetupService } from './SetupService';
import { HealthStatus } from '../types/HealthStatus';

export class HealthCheckService {
  private setupService = new SetupService();

  async getHealthStatus(): Promise<HealthStatus> {
    const setupState =
      this.setupService.getSetupState();

    const database = true;

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
