import { ApiConfig } from './ApiConfig';
import { ApiRoutes } from './ApiRoutes';
import { ApiStatus } from './ApiStatus';

import { ApiMessages } from '../constants/ApiMessages';
import { ApiStatusConstants } from '../constants/ApiStatusConstants';

import { ApiInfo } from '../types/ApiInfo';
import { ApiResult } from '../types/ApiResult';

export class ApiServer {
  private routes = new ApiRoutes();

  async start(
    config: ApiConfig
  ): Promise<ApiStatus> {
    const info = await this.getInfo(config);

    console.log(
      `${ApiMessages.Starting} ${info.port}...`
    );

    console.log(
      `${ApiMessages.RegisteredRoutes}: ${info.registeredRoutes}`
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

  async getInfo(
    config: ApiConfig
  ): Promise<ApiInfo> {
    const routes = this.routes.getRoutes();

    return {
      port: config.port,
      registeredRoutes: routes.length,
    };
  }
}
