import { createServer } from 'http';

import { HttpContentTypes } from '../constants/HttpContentTypes';
import { HttpHeaderNames } from '../constants/HttpHeaderNames';
import { HttpServerMessages } from '../constants/HttpServerMessages';

import { HttpRequestInfo } from '../types/HttpRequestInfo';
import { HttpResponseInfo } from '../types/HttpResponseInfo';
import { HttpServerStatus } from '../types/HttpServerStatus';
import { HttpTransactionInfo } from '../types/HttpTransactionInfo';

import { HttpContextFactory } from './HttpContextFactory';
import { HttpRequestHandler } from './HttpRequestHandler';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
        const requestInfo: HttpRequestInfo =
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

        const transaction: HttpTransactionInfo = {
          request: requestInfo,
          response: responseInfo,
        };

        response.writeHead(
          transaction.response.response
            .statusCode,
          {
            [HttpHeaderNames.ContentType]:
              HttpContentTypes.Json,
          }
        );

        response.end(
          JSON.stringify(
            transaction.response.response.body
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
