import prisma from '../database/client';
import { PrismaStatus } from '../types/PrismaStatus';

export class PrismaService {
  async getStatus(): Promise<PrismaStatus> {
    try {
      await prisma.$queryRaw`SELECT 1`;

      return {
        generated: true,
        connected: true,
      };
    } catch {
      return {
        generated: true,
        connected: false,
      };
    }
  }
}
