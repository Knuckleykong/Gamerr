import { SettingsService } from '../../services/SettingsService';

export class SettingsController {
  private settingsService = new SettingsService();

  async getSetting(key: string) {
    return this.settingsService.getValue(key);
  }

  async setSetting(
    key: string,
    value: string
  ) {
    return this.settingsService.setValue(
      key,
      value
    );
  }
}
