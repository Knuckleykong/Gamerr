import { ApiRoutes } from '../ApiRoutes';
import { RouteSummaryMessages } from '../../constants/RouteSummaryMessages';
import { ControllerCodes } from './ControllerCodes';
import { ControllerResponse } from './ControllerResponse';
import { RouteSummaryResponse } from './RoutesSummaryResponse';

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
            RouteSummaryMessages.UnableToRetrieveRouteSummary,
        },
      };
    }
  }
}
