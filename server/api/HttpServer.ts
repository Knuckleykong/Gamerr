import { HttpRouter } from './HttpRouter';
import { HttpRouteResult } from '../types/HttpRouteResult';

export class HttpServer {
  private router = new HttpRouter();

  async handleRequest(
    method: string,
    path: string
  ): Promise<HttpRouteResult> {
    const route =
      this.router.findRoute(
        method,
        path
      );

    if (!route) {
      return {
        found: false,
      };
    }

    return {
      found: true,
      response: await route.handler(),
    };
  }
}
