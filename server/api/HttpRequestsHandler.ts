import { HttpServer } from './HttpServer';
import { HttpResponse } from './HttpResponse';
import { HttpResponseFactory } from './HttpResponseFactory';

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
        message: 'Route not found',
      });
    }

    return response;
  }
}
