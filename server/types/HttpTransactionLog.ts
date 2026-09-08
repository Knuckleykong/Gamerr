import { HttpRequestLog } from './HttpRequestLog';
import { HttpResponseLog } from './HttpResponseLog';

export interface HttpTransactionLog {
  request: HttpRequestLog;
  response: HttpResponseLog;
}
