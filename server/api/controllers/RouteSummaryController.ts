import { ApiRoutes } from '../ApiRoutes';
import { ControllerCodes } from './ControllerCodes';
import { ControllerResponse } from './ControllerResponse';
import { RouteMessages } from '../../constants/RouteMessages';
import { RouteSummaryResponse } from './RouteSummaryResponse';

export class RoutesSummaryController {
  private apiRoutes = new ApiRoutes();

  async getSummary(): Promise<
    ControllerResponse<RouteSummaryResponse>
  > {
    try {
      return {
        success: true,
        data: {
          summary: {
            totalRoutes:
              this.apiRoutes.getRoutes().length,
          },
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
