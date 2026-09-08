import { HttpResponse } from '../api/HttpResponse';

export interface HttpRouteResult {
  found: boolean;
  response?: HttpResponse;
}
