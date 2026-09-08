import { HttpResponseInfo } from './HttpResponseInfo';

export interface HttpResponseLog {
  response: HttpResponseInfo;
  timestamp: Date;
}
