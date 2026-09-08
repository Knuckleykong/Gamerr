import { ControllerResponse } from './ControllerResponse';
import { ControllerCodes } from './ControllerCodes';
import { HealthResponse } from './HealthResponse';
import { DatabaseService } from '../../services/DatabaseService';

export class HealthController {
  private databaseService =
    new DatabaseService();

  async getHealth(): Promise<
    ControllerResponse<HealthResponse>
  > {
    try {
      const databaseStatus =
        await this.databaseService.getStatus();

      return {
        success: true,
        data: {
          status: 'healthy',
          service: 'Gamerr',
          database: {
            connected:
              databaseStatus.connected,
          },
        },
      };
    } catch {
      return {
        success: false,
        error: {
          code: ControllerCodes.HealthError,
          message:
            'Unable to retrieve health status',
        },
      };
    }
  }
}
