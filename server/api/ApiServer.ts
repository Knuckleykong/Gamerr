import { ApiConfig } from './ApiConfig';
import { ApiRoutes } from './ApiRoutes';
import { ApiStatus } from './ApiStatus';
import { ApiStatusConstants } from '../constants/ApiStatusConstants';
import { ApiResult } from '../types/ApiResult';

export class ApiServer {
  private routes = new ApiRoutes();

  async start(
    config: ApiConfig
  ): Promise<ApiStatus> {
    const result = await this.initialize(config);

    console.log(
      `API Server starting on port ${config.port}...`
    );

    console.log(
      `Registered ${result.registeredRoutes} routes`
    );

    const routes = this.routes.getRoutes();

    for (const route of routes) {
      console.log(
        `${route.method} ${route.path}`
      );
    }

    return {
      running: ApiStatusConstants.Running,
      port: config.port,
    };
  }

  async initialize(
    config: ApiConfig
  ): Promise<ApiResult> {
    const routes = this.routes.getRoutes();

    return {
      success: true,
      registeredRoutes: routes.length,
    };
  }
}
