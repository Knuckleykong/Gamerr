import { DatabaseService } from '../services/DatabaseService';

export class DatabaseInitializer {
  private databaseService = new DatabaseService();

  async initialize(): Promise<void> {
    console.log('Initializing database...');

    const status =
      await this.databaseService.getStatus();

    if (!status.connected) {
      throw new Error(
        'Database initialization failed'
      );
    }

    console.log('Database initialized');
  }
}
