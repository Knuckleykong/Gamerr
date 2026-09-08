import prisma from '../database/client';
import { DatabaseStatus } from '../types/DatabaseStatus';
import { DatabaseConstants } from '../database/DatabaseConstants';
import { DatabaseConfig } from '../database/DatabaseConfig';

export class DatabaseService {
  private config: DatabaseConfig = {
    provider: DatabaseConstants.Provider,
    connectionString:
      DatabaseConstants.DefaultConnectionString,
  };

  getConfig(): DatabaseConfig {
    return this.config;
  }

  async getStatus(): Promise<DatabaseStatus> {
    try {
      await prisma.$queryRaw`SELECT 1`;

      return {
        connected: true,
      };
    } catch {
      return {
        connected: false,
      };
    }
  }
}
