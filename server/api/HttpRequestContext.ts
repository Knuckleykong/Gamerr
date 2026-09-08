import { HttpMethod } from './HttpMethod';

export interface HttpRequestContext {
  method: HttpMethod;
  path: string;
}
