import { ConfigService } from '../config/ConfigService';

export class Application {
  private configService = new ConfigService();

  async start() {
    console.log('Starting Gamerr...');

    const appConfig = this.configService.getAppConfig();

    console.log(`Environment: ${appConfig.environment}`);
    console.log(`Port: ${appConfig.port}`);
  }
}
