import { ApiConfig } from './ApiConfig';
import { ApiRoutes } from './ApiRoutes';
import { ApiStatus } from './ApiStatus';

export class ApiServer {
  private routes = new ApiRoutes();

  async start(
    config: ApiConfig
  ): Promise<ApiStatus> {
    const routes = this.routes.getRoutes();

    console.log(
      `API Server starting on port ${config.port}...`
    );

    console.log(
      `Registered ${routes.length} routes`
    );

    for (const route of routes) {
      console.log(
        `${route.method} ${route.path}`
      );
    }

    return {
      running: true,
      port: config.port,
    };
  }
}
