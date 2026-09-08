import { createServer } from 'http';

import { HttpServerMessages } from '../constants/HttpServerMessages';
import { HttpMethod } from './HttpMethod';
import { HttpRequestContext } from './HttpRequestContext';
import { HttpRequestHandler } from './HttpRequestHandler';

import { HttpServerStatus } from '../types/HttpServerStatus';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
        const context: HttpRequestContext = {
          method:
            (request.method as HttpMethod) ??
            'GET',
          path: request.url ?? '/',
        };

        const result =
          await this.requestHandler.handle(
            context
          );

        response.writeHead(
          result.statusCode,
          {
            'Content-Type':
              'application/json',
          }
        );

        response.end(
          JSON.stringify(result.body)
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
