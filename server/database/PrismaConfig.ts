import { DatabaseConstants } from './DatabaseConstants';

export class PrismaConfig {
  getProvider(): string {
    return DatabaseConstants.Provider;
  }

  getConnectionString(): string {
    return DatabaseConstants.DefaultConnectionString;
  }
}
