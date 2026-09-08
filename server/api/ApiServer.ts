import { ApiConfig } from './ApiConfig';
import { ApiRoutes } from './ApiRoutes';
import { ApiStatus } from './ApiStatus';

import { ApiMessages } from '../constants/ApiMessages';
import { ApiStatusConstants } from '../constants/ApiStatusConstants';

import { ApiResult } from '../types/ApiResult';

export class ApiServer {
  private routes = new ApiRoutes();

  async start(
    config: ApiConfig
  ): Promise<ApiStatus> {
    const result = await this.initialize(config);

    console.log(
      `${ApiMessages.Starting} ${config.port}...`
    );

    console.log(
      `${ApiMessages.RegisteredRoutes}: ${result.registeredRoutes}`
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
