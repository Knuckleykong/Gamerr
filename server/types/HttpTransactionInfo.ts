import { HttpRequestInfo } from './HttpRequestInfo';
import { HttpResponseInfo } from './HttpResponseInfo';

export interface HttpTransactionInfo {
  request: HttpRequestInfo;
  response: HttpResponseInfo;
}
