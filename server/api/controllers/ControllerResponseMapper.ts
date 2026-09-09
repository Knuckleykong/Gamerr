import { HttpResponse } from '../HttpResponse';
import { HttpResponseFactory } from '../HttpResponseFactory';

import { ControllerResponse } from './controllers/ControllerResponse';

export class ControllerResponseMapper {
  static map<T>(
    response: ControllerResponse<T>
  ): HttpResponse {
    if (!response.success) {
      return HttpResponseFactory.internalServerError(
        response
      );
    }

    return HttpResponseFactory.ok(
      response
    );
  }
}
