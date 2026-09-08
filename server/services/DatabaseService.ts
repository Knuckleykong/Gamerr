import prisma from '../database/client';
import { DatabaseConfig } from '../database/DatabaseConfig';
import { DatabaseConstants } from '../database/DatabaseConstants';
import { DatabaseStatus } from '../types/DatabaseStatus';

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
        prisma: {
          generated: true,
          connected: true,
        },
      };
    } catch {
      return {
        connected: false,
        prisma: {
          generated: false,
          connected: false,
        },
      };
    }
  }
}
`
