import { HttpMethod } from '../api/HttpMethod';

export interface RouteInfo {
  method: HttpMethod;
  path: string;
}
