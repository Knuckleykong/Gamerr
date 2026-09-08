import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { ControllerCodes } from './ControllerCodes';
import { ControllerResponse } from './ControllerResponse';
import { ControllerMessages } from './ControllerMessages';
import { ApplicationResponse } from './ApplicationResponse';

export class ApplicationController {
  async getApplication(): Promise<
    ControllerResponse<ApplicationResponse>
  > {
    try {
      return {
        success: true,
        data: {
          application: ApplicationConstants,
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
`
