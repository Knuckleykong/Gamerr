import { ConfigService } from '../config/ConfigService';
import { SetupState } from '../types/SetupState';

export class SetupService {
  private configService = new ConfigService();

  getSetupState(): SetupState {
    const libraryConfig =
      this.configService.getLibraryConfig();

    const hasLibraryPaths =
      libraryConfig.paths.length > 0;

    return {
      isFirstRun: !hasLibraryPaths,
      isConfigured: hasLibraryPaths,
      hasLibraryPaths,
    };
  }
}
