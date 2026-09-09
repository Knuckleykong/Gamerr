import { HttpMethod } from './HttpMethod';
import { HttpRequestContext } from './HttpRequestContext';

import { HttpRequestInfo } from '../types/HttpRequestInfo';

export class HttpContextFactory {
  static create(
    method: string,
    path: string,
    body?: string
  ): HttpRequestContext {
    return {
      method: method as HttpMethod,
      path,
      body,
    };
  }

  static createRequestInfo(
    method: string,
    path: string,
    body?: string
  ): HttpRequestInfo {
    return {
      request: this.create(
        method,
        path,
        body
      ),
    };
  }
}
