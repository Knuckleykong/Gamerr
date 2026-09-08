import { HttpTransactionLog } from '../types/HttpTransactionLog';

export class HttpLoggingService {
  log(
    transaction: HttpTransactionLog
  ): void {
    console.log(transaction);
  }
}
