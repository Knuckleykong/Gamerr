import { HttpRequestContext } from './HttpRequestContext';
import { ApiRoutes } from './ApiRoutes';
import { RouteHandler } from './RouteHandler';

export class HttpRouter {
  private routes = new ApiRoutes();

  findRoute(
    context: HttpRequestContext
  ): RouteHandler | undefined {
    return this.routes
      .getRoutes()
      .find(
        route =>
          route.method === context.method &&
          route.path === context.path
      );
  }
}
