import { ApiConfig } from './ApiConfig';
import { ApiRoutes } from './ApiRoutes';
import { ApiStatus } from './ApiStatus';
import { HttpServer } from './HttpServer';
import { NodeHttpServer } from './NodeHttpServer';

import { ApiMessages } from '../constants/ApiMessages';
import { ApiStatusConstants } from '../constants/ApiStatusConstants';

import { ApiInfo } from '../types/ApiInfo';
import { ApiResult } from '../types/ApiResult';
import { ApiRouteSummary } from '../types/ApiRouteSummary';

export class ApiServer {
  private routes = new ApiRoutes();
  private httpServer = new HttpServer();
  private nodeHttpServer =
    new NodeHttpServer();

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

    this.nodeHttpServer.start(
      config.port
    );

    return {
      running: ApiStatusConstants.Running,
      port: config.port,
    };
  }

  async initialize(
    config: ApiConfig
  ): Promise<ApiResult> {
    const summary = this.getRouteSummary();

    return {
      success: true,
      registeredRoutes:
        summary.totalRoutes,
    };
  }

  async getInfo(
    config: ApiConfig
  ): Promise<ApiInfo> {
    const summary = this.getRouteSummary();

    return {
      port: config.port,
      registeredRoutes:
        summary.totalRoutes,
    };
  }

  getRouteSummary(): ApiRouteSummary {
    return {
      totalRoutes:
        this.routes.getRoutes().length,
    };
  }

  getHttpServer(): HttpServer {
    return this.httpServer;
  }
}
