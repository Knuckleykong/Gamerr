import { HttpMessages } from '../constants/HttpMessages';

import { HttpRequestContext } from './HttpRequestContext';
import { HttpResponse } from './HttpResponse';
import { HttpResponseFactory } from './HttpResponseFactory';
import { HttpServer } from './HttpServer';

export class HttpRequestHandler {
  private httpServer =
    new HttpServer();

  async handle(
    context: HttpRequestContext
  ): Promise<HttpResponse> {
    const result =
      await this.httpServer.handleRequest(
        context
      );

    if (!result.found) {
      return HttpResponseFactory.notFound({
        message: HttpMessages.RouteNotFound,
      });
    }

    return result.response!;
  }
}
