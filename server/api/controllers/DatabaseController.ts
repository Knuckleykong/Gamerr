import { DatabaseService } from '../../services/DatabaseService';
import { ControllerCodes } from './ControllerCodes';
import { ControllerResponse } from './ControllerResponse';
import { DatabaseResponse } from './DatabaseResponse';

export class DatabaseController {
  private databaseService = new DatabaseService();

  async getDatabase(): Promise<
    ControllerResponse<DatabaseResponse>
  > {
    try {
      const config =
        this.databaseService.getConfig();

      const status =
        await this.databaseService.getStatus();

      return {
        success: true,
        data: {
          config,
          status,
        },
      };
    } catch {
      return {
        success: false,
        error: {
          code: 'DATABASE_ERROR',
          message:
            'Unable to retrieve database information',
        },
      };
    }
  }
}
