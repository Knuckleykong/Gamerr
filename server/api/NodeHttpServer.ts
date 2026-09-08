import { createServer } from 'http';

import { HttpContentTypes } from '../constants/HttpContentTypes';
import { HttpHeaderNames } from '../constants/HttpHeaderNames';
import { HttpServerMessages } from '../constants/HttpServerMessages';

import { HttpRequestInfo } from '../types/HttpRequestInfo';
import { HttpRequestLog } from '../types/HttpRequestLog';
import { HttpResponseInfo } from '../types/HttpResponseInfo';
import { HttpResponseLog } from '../types/HttpResponseLog';
import { HttpServerStatus } from '../types/HttpServerStatus';
import { HttpTransactionInfo } from '../types/HttpTransactionInfo';
import { HttpTransactionLog } from '../types/HttpTransactionLog';

import { HttpContextFactory } from './HttpContextFactory';
import { HttpRequestHandler } from './HttpRequestHandler';

import { HttpLoggingService } from '../services/HttpLoggingService';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  private httpLoggingService =
    new HttpLoggingService();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
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

        this.httpLoggingService.log(
          transactionLog
        );

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
