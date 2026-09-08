import prisma from '../database/client';
import { DatabaseStatus } from '../types/DatabaseStatus';

export class DatabaseService {
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
