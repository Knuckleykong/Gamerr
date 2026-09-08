import { DatabaseMessages } from '../constants/DatabaseMessages';
import { DatabaseService } from '../services/DatabaseService';
import { StartupResult } from '../types/StartupResult';

export class DatabaseInitializer {
  private databaseService =
    new DatabaseService();

  async initialize(): Promise<StartupResult> {
    console.log(
      DatabaseMessages.Initializing
    );

    const status =
      await this.databaseService.getStatus();

    if (!status.connected) {
      return {
        success: false,
        message:
          DatabaseMessages.InitializationFailed,
      };
    }

    console.log(
      DatabaseMessages.Initialized
    );

    return {
      success: true,
      message: DatabaseMessages.Initialized,
    };
  }
}
