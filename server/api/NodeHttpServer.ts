import { createServer } from 'http';

import { HttpContentTypes } from '../constants/HttpContentTypes';
import { HttpHeaderNames } from '../constants/HttpHeaderNames';
import { HttpServerMessages } from '../constants/HttpServerMessages';
import { HttpTransactionMessages } from '../constants/HttpTransactionMessages';

import { HttpRequestInfo } from '../types/HttpRequestInfo';
import { HttpRequestLog } from '../types/HttpRequestLog';
import { HttpResponseInfo } from '../types/HttpResponseInfo';
import { HttpResponseLog } from '../types/HttpResponseLog';
import { HttpServerStatus } from '../types/HttpServerStatus';
import { HttpTransactionInfo } from '../types/HttpTransactionInfo';
import { HttpTransactionLog } from '../types/HttpTransactionLog';

import { HttpContextFactory } from './HttpContextFactory';
import { HttpRequestHandler } from './HttpRequestHandler';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
        console.log(
          HttpTransactionMessages.ProcessingRequest
        );

        const requestInfo: HttpRequestInfo =
          HttpContextFactory.createRequestInfo(
            request.method ?? 'GET',
            request.url ?? '/'
          );

        const requestLog: HttpRequestLog = {
          request: requestInfo,
          timestamp: new Date(),
        };

        const responseInfo: HttpResponseInfo = {
          response:
            await this.requestHandler.handle(
              requestInfo.request
            ),
        };

        const responseLog: HttpResponseLog = {
          response: responseInfo,
          timestamp: new Date(),
        };

        const transactionLog: HttpTransactionLog = {
          request: requestLog,
          response: responseLog,
        };

        console.log(transactionLog);

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
