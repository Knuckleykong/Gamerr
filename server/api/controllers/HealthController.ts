import { ControllerResponse } from './ControllerResponse';
import { ControllerCodes } from './ControllerCodes';

export class HealthController {
  async getHealth(): Promise<
    ControllerResponse<{
      status: string;
      service: string;
    }>
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
          message: 'Unable to retrieve health status',
        },
      };
    }
  }
}
