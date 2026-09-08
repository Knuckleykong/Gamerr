import { HttpLogResult } from '../types/HttpLogResult';
import { HttpTransactionLog } from '../types/HttpTransactionLog';

export class HttpLoggingService {
  log(
    transaction: HttpTransactionLog
  ): HttpLogResult {
    console.log(transaction);

    return {
      success: true,
    };
  }
}
