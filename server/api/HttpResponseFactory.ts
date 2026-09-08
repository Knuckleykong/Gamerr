import { HttpStatusMessages } from '../constants/HttpStatusMessages';

import { HttpResponse } from './HttpResponse';
import { HttpStatusCodes } from './HttpStatusCodes';

export class HttpResponseFactory {
  static ok(body?: unknown): HttpResponse {
    return {
      statusCode: HttpStatusCodes.OK,
      body:
        body ?? {
          message: HttpStatusMessages.Ok,
        },
    };
  }

  static badRequest(
    body: unknown
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.BadRequest,
      body,
    };
  }

  static notFound(
    body?: unknown
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.NotFound,
      body:
        body ?? {
          message:
            HttpStatusMessages.NotFound,
        },
    };
  }

  static internalServerError(
    body?: unknown
  ): HttpResponse {
    return {
      statusCode:
        HttpStatusCodes.InternalServerError,
      body:
        body ?? {
          message:
            HttpStatusMessages.InternalServerError,
        },
    };
  }
}
