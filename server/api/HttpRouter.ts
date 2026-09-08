import { ApiRoutes } from './ApiRoutes';
import { RouteHandler } from './RouteHandler';

export class HttpRouter {
  private routes = new ApiRoutes();

  findRoute(
    method: string,
    path: string
  ): RouteHandler | undefined {
    return this.routes
      .getRoutes()
      .find(
        route =>
          route.method === method &&
          route.path === path
      );
  }
}
