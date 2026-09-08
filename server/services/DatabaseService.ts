import { DatabaseConfig } from '../database/DatabaseConfig';
import { DatabaseConstants } from '../database/DatabaseConstants';
import { DatabaseStatus } from '../types/DatabaseStatus';
import { DatabaseVersion } from '../types/DatabaseVersion';
import { PrismaService } from './PrismaService';

export class DatabaseService {
  private prismaService = new PrismaService();

  private config: DatabaseConfig = {
    provider: DatabaseConstants.Provider,
    connectionString:
      DatabaseConstants.DefaultConnectionString,
  };

  getConfig(): DatabaseConfig {
    return this.config;
  }

  getVersion(): DatabaseVersion {
    return {
      version: '0.1.0',
    };
  }

  async getStatus(): Promise<DatabaseStatus> {
    const prismaStatus =
      await this.prismaService.getStatus();

    return {
      connected: prismaStatus.connected,
      prisma: prismaStatus,
    };
  }
}
