import { ApiRoutes } from '../ApiRoutes';
import { RouteMessages } from '../../constants/RouteMessages';
import { ControllerCodes } from './ControllerCodes';
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
          code: ControllerCodes.RouteError,
          message:
            RouteMessages.UnableToRetrieveRoutes,
        },
      };
    }
  }
}
