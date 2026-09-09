import { SettingsService } from './settings/SettingsService';
import { SettingsConstants } from '../constants/SettingsConstants';
import { SetupState } from '../types/SetupState';

export class SetupService {
  private settingsService =
    new SettingsService();

  async getSetupState(): Promise<SetupState> {
    const result =
      await this.settingsService.getValue(
        SettingsConstants.LibraryPaths
      );

    const hasLibraryPaths =
      result.success &&
      !!result.data?.value?.trim();

    return {
      isFirstRun: !hasLibraryPaths,
      isConfigured: hasLibraryPaths,
      hasLibraryPaths,
    };
  }
}
