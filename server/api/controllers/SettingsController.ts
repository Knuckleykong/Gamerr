import { SettingsService } from '../../services/settings/SettingsService';
import { ControllerResponse } from './ControllerResponse';
import { ControllerCodes } from './ControllerCodes';
import { SettingsResponse } from './SettingsResponse';

export class SettingsController {
  private settingsService = new SettingsService();

  async getSetting(
    key: string
  ): Promise<ControllerResponse<SettingsResponse>> {
    const result =
      await this.settingsService.getValue(key);

    if (!result.success) {
      return {
        success: false,
        error: {
          code: ControllerCodes.SettingError,
          message: result.error ?? 'Unknown error',
        },
      };
    }

    return {
      success: true,
      data: {
        setting: result.data!,
      },
    };
  }

  async setSetting(
    key: string,
    value: string
  ): Promise<ControllerResponse<SettingsResponse>> {
    const result =
      await this.settingsService.setValue(
        key,
        value
      );

    if (!result.success) {
      return {
        success: false,
        error: {
          code: ControllerCodes.SettingError,
          message: result.error ?? 'Unknown error',
        },
      };
    }

    return {
      success: true,
      data: {
        setting: result.data!,
      },
    };
  }
}
