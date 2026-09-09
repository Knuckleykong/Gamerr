import { HttpStatusMessages } from '../constants/HttpStatusMessages';
import { HttpContentTypes } from '../constants/HttpContentTypes';

import { HttpResponse } from './HttpResponse';
import { HttpStatusCodes } from './HttpStatusCodes';

export class HttpResponseFactory {
  static ok(body?: unknown): HttpResponse {
    return {
      statusCode: HttpStatusCodes.OK,
      contentType: HttpContentTypes.Json,
      body:
        body ?? {
          message: HttpStatusMessages.Ok,
        },
    };
  }

  static html(
    html: string
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.OK,
      contentType: HttpContentTypes.Html,
      body: html,
    };
  }

  static badRequest(
    body: unknown
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.BadRequest,
      contentType: HttpContentTypes.Json,
      body,
    };
  }

  static notFound(
    body?: unknown
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.NotFound,
      contentType: HttpContentTypes.Json,
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
      contentType: HttpContentTypes.Json,
      body:
        body ?? {
          message:
            HttpStatusMessages.InternalServerError,
        },
    };
  }
}
