import { DatabaseService } from '../../services/DatabaseService';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { ControllerCodes } from './ControllerCodes';
import { ControllerResponse } from './ControllerResponse';
import { HealthResponse } from './HealthResponse';

export class HealthController {
  private databaseService =
    new DatabaseService();

  async getHealth(): Promise<
    ControllerResponse<HealthResponse>
  > {
    try {
      const config =
        this.databaseService.getConfig();

      const status =
        await this.databaseService.getStatus();

      const version =
        this.databaseService.getVersion();

      return {
        success: true,
        data: {
          status: 'healthy',
          service: ApplicationConstants.Name,
          version: ApplicationConstants.Version,
          database: {
            config,
            status,
            version,
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
