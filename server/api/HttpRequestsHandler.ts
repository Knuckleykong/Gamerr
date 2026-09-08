import { HttpMessages } from '../constants/HttpMessages';

import { HttpResponse } from './HttpResponse';
import { HttpResponseFactory } from './HttpResponseFactory';
import { HttpServer } from './HttpServer';

export class HttpRequestHandler {
  private httpServer =
    new HttpServer();

  async handle(
    method: string,
    path: string
  ): Promise<HttpResponse> {
    const result =
      await this.httpServer.handleRequest(
        method,
        path
      );

    if (!result.found) {
      return HttpResponseFactory.notFound({
        message: HttpMessages.RouteNotFound,
      });
    }

    return result.response!;
  }
}
``
