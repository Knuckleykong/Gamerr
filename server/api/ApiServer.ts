import { ApiStatus } from './ApiStatus';
import { ApiConfig } from './ApiConfig';

export class ApiServer {
  async start(
    config: ApiConfig
  ): Promise<ApiStatus> {
    console.log(
      `API Server starting on port ${config.port}...`
    );

    return {
      running: true,
      port: config.port,
    };
  }
}
