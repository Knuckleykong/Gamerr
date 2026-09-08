import { ApiRoutes } from '../ApiRoutes';
import { ControllerCodes } from './ControllerCodes';
import { ControllerMessages } from './ControllerMessages';
import { ControllerResponse } from './ControllerResponse';
import { RoutesResponse } from './RoutesResponse';

export class RoutesController {
  private apiRoutes = new ApiRoutes();

  async getRoutes(): Promise<
    ControllerResponse<RoutesResponse>
  > {
    try {
      return {
        success: true,
        data: {
          routes:
            this.apiRoutes.getRouteCollection(),
        },
      };
    } catch {
      return {
        success: false,
        error: {
          code: ControllerCodes.HealthError,
          message:
            ControllerMessages.HealthUnavailable,
        },
      };
    }
  }
}
