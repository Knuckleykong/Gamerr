import { SetupService } from '../services/SetupService';
import { SetupState } from '../types/SetupState';

export class StartupChecks {
  private setupService = new SetupService();

  run(): SetupState {
    return this.setupService.getSetupState();
  }
}
