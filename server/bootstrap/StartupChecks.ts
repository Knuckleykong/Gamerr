import { SetupService } from '../services/SetupService';
import { SetupState } from '../types/SetupState';

export class StartupChecks {
  private setupService =
    new SetupService();

  async run(): Promise<SetupState> {
    return await this.setupService.getSetupState();
  }
}
