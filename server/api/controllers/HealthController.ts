import { ControllerResponse } from './ControllerResponse';

export class HealthController {
  async getHealth(): Promise<
    ControllerResponse<{
      status: string;
      service: string;
    }>
  > {
    return {
      success: true,
      data: {
        status: 'healthy',
        service: 'Gamerr',
      },
    };
  }
}
