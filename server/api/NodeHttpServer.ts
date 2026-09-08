import { createServer } from 'http';

import { HttpServerMessages } from '../constants/HttpServerMessages';
import { HttpServerStatus } from '../types/HttpServerStatus';

import { HttpRequestHandler } from './HttpRequestHandler';

export class NodeHttpServer {
  private requestHandler =
    new HttpRequestHandler();

  start(port: number): HttpServerStatus {
    const server = createServer(
      async (request, response) => {
        const result =
          await this.requestHandler.handle(
            request.method ?? 'GET',
            request.url ?? '/'
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
