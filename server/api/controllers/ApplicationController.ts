import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { ApplicationSummaryResponse } from './ApplicationSummaryResponse';
import { ControllerCodes } from './ControllerCodes';
import { ControllerMessages } from './ControllerMessages';
import { ControllerResponse } from './ControllerResponse';

export class ApplicationController {
  async getApplication(): Promise<
    ControllerResponse<ApplicationSummaryResponse>
  > {
    try {
      return {
        success: true,
        data: {
          metadata: ApplicationConstants,
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
