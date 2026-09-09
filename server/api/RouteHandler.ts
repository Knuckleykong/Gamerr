import { HttpMethod } from './HttpMethod';
import { HttpRequestContext } from './HttpRequestContext';
import { HttpResponse } from './HttpResponse';

export interface RouteHandler {
  method: HttpMethod;
  path: string;
  handler: (
    context: HttpRequestContext
  ) => Promise<HttpResponse>;
}
