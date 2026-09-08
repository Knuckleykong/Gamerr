import { ApiConstants } from '../../constants/ApiConstants';
import { ControllerCodes } from './ControllerCodes';
import { ControllerMessages } from './ControllerMessages';
import { ControllerResponse } from './ControllerResponse';
import { ApiResponse } from './ApiResponse';

export class ApiController {
  async getApi(): Promise<
    ControllerResponse<ApiResponse>
  > {
    try {
      return {
        success: true,
        data: {
          api: {
            port: ApiConstants.DefaultPort,
            registeredRoutes: 0,
          },
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
