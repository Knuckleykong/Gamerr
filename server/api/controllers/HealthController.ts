import { ControllerResponse } from './ControllerResponse';

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
          code: 'HEALTH_ERROR',
          message: 'Unable to retrieve health status',
        },
      };
    }
  }
}
