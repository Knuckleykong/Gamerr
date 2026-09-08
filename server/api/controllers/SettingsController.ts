import { SettingsService } from '../../services/SettingsService';
import { ControllerResponse } from './ControllerResponse';
import { Setting } from '../../types/Setting';

export class SettingsController {
  private settingsService = new SettingsService();

  async getSetting(
    key: string
  ): Promise<ControllerResponse<Setting>> {
    const result =
      await this.settingsService.getValue(key);

    if (!result.success) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
      data: result.data,
    };
  }

  async setSetting(
    key: string,
    value: string
  ): Promise<ControllerResponse<Setting>> {
    const result =
      await this.settingsService.setValue(
        key,
        value
      );

    if (!result.success) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
      data: result.data,
    };
  }
}
