import { SettingRepository } from '../repositories/SettingRepository';

export class SettingsService {
  private settingRepository =
    new SettingRepository();

  async getValue(key: string) {
    return this.settingRepository.getByKey(key);
  }

  async setValue(
    key: string,
    value: string
  ) {
    return this.settingRepository.setValue(
      key,
      value
    );
  }
}
