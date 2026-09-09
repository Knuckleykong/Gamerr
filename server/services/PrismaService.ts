import prisma from '../database/client';
import { PrismaConfig } from '../database/PrismaConfig';
import { PrismaInfo } from '../types/PrismaInfo';
import { PrismaStatus } from '../database/PrismaStatus';

export class PrismaService {
  private config = new PrismaConfig();

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
