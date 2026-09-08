import { HttpMethod } from './HttpMethod';
import { HttpRequestContext } from './HttpRequestContext';

export class HttpContextFactory {
  static create(
    method: string,
    path: string
  ): HttpRequestContext {
    return {
      method: method as HttpMethod,
      path,
    };
  }
}
