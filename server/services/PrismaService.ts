import prisma from '../database/client';
import { PrismaInfo } from '../types/PrismaInfo';
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

  async getInfo(): Promise<PrismaInfo> {
    const status = await this.getStatus();

    return {
      status,
    };
  }
}
