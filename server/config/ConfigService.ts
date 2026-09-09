import { AppConfig } from './AppConfig';
import { LibraryConfig } from './LibraryConfig';

import { ApiConstants } from '../constants/ApiConstants';
import { EnvironmentConstants } from '../constants/EnvironmentConstants';
import { SettingsConstants } from '../constants/SettingsConstants';

import { SettingsService } from '../services/settings/SettingsService';

export class ConfigService {
  private settingsService =
    new SettingsService();

  getAppConfig(): AppConfig {
    return {
      port: ApiConstants.DefaultPort,
      environment: {
        name: EnvironmentConstants.Development,
      },
    };
  }

  async getLibraryConfig(): Promise<LibraryConfig> {
    const result =
      await this.settingsService.getValue(
        SettingsConstants.LibraryPaths
      );

    if (!result.success) {
      return {
        paths: [],
      };
    }

    const path =
      result.data?.value?.trim() ?? '';

    return {
      paths: path ? [path] : [],
    };
  }
}
