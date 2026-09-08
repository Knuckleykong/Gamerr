import { AppConfig } from './AppConfig';
import { LibraryConfig } from './LibraryConfig';

export class ConfigService {
  getAppConfig(): AppConfig {
    return {
      port: 5055,
      environment: 'development',
    };
  }

  getLibraryConfig(): LibraryConfig {
    return {
      paths: [],
    };
  }
}
