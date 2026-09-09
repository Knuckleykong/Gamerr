import { HttpRequestContext } from './HttpRequestContext';
import { HttpRouter } from './HttpRouter';

import { HttpRouteResult } from '../types/HttpRouteResult';

export class HttpServer {
  private router = new HttpRouter();

  async handleRequest(
    context: HttpRequestContext
  ): Promise<HttpRouteResult> {
    const route =
      this.router.findRoute(context);

    if (!route) {
      return {
        found: false,
      };
    }

    return {
      found: true,
      response: await route.handler(
        context
      ),
    };
  }
}
