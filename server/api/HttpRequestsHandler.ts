import { HttpResponse } from './HttpResponse';
import { HttpResponseFactory } from './HttpResponseFactory';
import { HttpServer } from './HttpServer';

import { HttpMessages } from '../constants/HttpMessages';

export class HttpRequestHandler {
  private httpServer =
    new HttpServer();

  async handle(
    method: string,
    path: string
  ): Promise<HttpResponse> {
    const response =
      await this.httpServer.handleRequest(
        method,
        path
      );

    if (!response) {
      return HttpResponseFactory.notFound({
        message: HttpMessages.RouteNotFound,
      });
    }

    return response;
  }
}
