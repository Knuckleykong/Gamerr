import { HttpRouter } from './HttpRouter';
import { HttpResponse } from './HttpResponse';

export class HttpServer {
  private router = new HttpRouter();

  async handleRequest(
    method: string,
    path: string
  ): Promise<HttpResponse | undefined> {
    const route =
      this.router.findRoute(
        method,
        path
      );

    if (!route) {
      return undefined;
    }

    return route.handler();
  }
}
