import { createServer } from 'http';

import { HttpContentTypes } from '../constants/HttpContentTypes';
import { HttpHeaderNames } from '../constants/HttpHeaderNames';
import { HttpServerMessages } from '../constants/HttpServerMessages';
import { HttpResponseInfo } from '../types/HttpResponseInfo';
import { HttpServerStatus } from '../types/HttpServerStatus';

import { HttpContextFactory } from './HttpContextFactory';
import { HttpRequestHandler } from './HttpRequestHandler';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
        const requestInfo =
          HttpContextFactory.createRequestInfo(
            request.method ?? 'GET',
            request.url ?? '/'
          );

        const responseInfo: HttpResponseInfo = {
          response:
            await this.requestHandler.handle(
              requestInfo.request
            ),
        };

        response.writeHead(
          responseInfo.response.statusCode,
          {
            [HttpHeaderNames.ContentType]:
              HttpContentTypes.Json,
          }
        );

        response.end(
          JSON.stringify(
            responseInfo.response.body
          )
        );
      }
    );

    server.listen(port, () => {
      console.log(
        `${HttpServerMessages.Started}: ${port}`
      );
    });

    return {
      listening: true,
      port,
    };
  }
}
