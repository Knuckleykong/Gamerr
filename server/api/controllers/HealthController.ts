import { ControllerResponse } from './ControllerResponse';
import { ControllerCodes } from './ControllerCodes';
import { HealthResponse } from '../../types/HealthResponse';

export class HealthController {
  async getHealth(): Promise<
    ControllerResponse<HealthResponse>
  > {
    try {
      return {
        success: true,
        data: {
          status: 'healthy',
          service: 'Gamerr',
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
