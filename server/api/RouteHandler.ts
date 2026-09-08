import { RouteInfo } from '../types/RouteInfo';
import { HttpResponse } from './HttpResponse';

export interface RouteHandler extends RouteInfo {
  handler: () => Promise<HttpResponse>;
}
