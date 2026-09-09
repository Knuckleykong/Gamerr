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
        let body = '';

        for await (const chunk of request) {
          body += chunk;
        }

        const requestInfo: HttpRequestInfo =
          HttpContextFactory.createRequestInfo(
            request.method ?? 'GET',
            request.url ?? '/',
            body
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

        const logResult =
          this.httpLoggingService.log(
            transactionLog
          );

        console.log(logResult.message);

        const transaction: HttpTransactionInfo = {
          request: requestInfo,
          response: responseInfo,
        };

        const httpResponse =
          transaction.response.response;

        response.writeHead(
          httpResponse.statusCode,
          {
            [HttpHeaderNames.ContentType]:
              httpResponse.contentType ??
              HttpContentTypes.Json,
          }
        );

        if (
          httpResponse.contentType ===
          HttpContentTypes.Html
        ) {
          response.end(
            httpResponse.body as string
          );

          return;
        }

        response.end(
          JSON.stringify(
            httpResponse.body
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
