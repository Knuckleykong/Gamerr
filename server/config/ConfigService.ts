import { AppConfig } from './AppConfig';
import { LibraryConfig } from './LibraryConfig';
import { ScanConstants } from '../constants/ScanConstants';

export class ConfigService {
  getAppConfig(): AppConfig {
    return {
      port: 5055,
      environment: 'development',
    };
  }

  getLibraryConfig(): LibraryConfig {
    return {
      paths: ScanConstants.DefaultLibraryPaths,
    };
  }
}
