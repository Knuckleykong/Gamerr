import { PrismaStatus } from '../database/PrismaStatus';

export interface DatabaseStatus {
  connected: boolean;
  prisma: PrismaStatus;
}
