import { AppConfig } from './AppConfig';
import { LibraryConfig } from './LibraryConfig';

import { ApiConstants } from '../constants/ApiConstants';
import { EnvironmentConstants } from '../constants/EnvironmentConstants';
import { ScanConstants } from '../constants/ScanConstants';

export class ConfigService {
  getAppConfig(): AppConfig {
    return {
      port: ApiConstants.DefaultPort,
      environment: {
        name: EnvironmentConstants.Development,
      },
    };
  }

  getLibraryConfig(): LibraryConfig {
    return {
      paths: ScanConstants.DefaultLibraryPaths,
    };
  }
}
