import { HttpRequestInfo } from './HttpRequestInfo';

export interface HttpRequestLog {
  request: HttpRequestInfo;
  timestamp: Date;
}
