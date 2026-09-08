import { HttpMethod } from './HttpMethod';
import { HttpResponse } from './HttpResponse';

export interface RouteHandler {
  method: HttpMethod;
  path: string;
  handler: () => Promise<HttpResponse>;
}
