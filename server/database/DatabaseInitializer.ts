import { DatabaseMessages } from '../constants/DatabaseMessages';
import { DatabaseService } from '../services/DatabaseService';

export class DatabaseInitializer {
  private databaseService =
    new DatabaseService();

  async initialize(): Promise<void> {
    console.log(
      DatabaseMessages.Initializing
    );

    const status =
      await this.databaseService.getStatus();

    if (!status.connected) {
      throw new Error(
        DatabaseMessages.InitializationFailed
      );
    }

    console.log(
      DatabaseMessages.Initialized
    );
  }
}
