import { HttpResponse } from './HttpResponse';
import { HttpStatusCodes } from './HttpStatusCodes';

export class HttpResponseFactory {
  static ok(body: unknown): HttpResponse {
    return {
      statusCode: HttpStatusCodes.OK,
      body,
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
    body: unknown
  ): HttpResponse {
    return {
      statusCode: HttpStatusCodes.NotFound,
      body,
    };
  }

  static internalServerError(
    body: unknown
  ): HttpResponse {
    return {
      statusCode:
        HttpStatusCodes.InternalServerError,
      body,
    };
  }
}
