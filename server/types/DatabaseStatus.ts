import { PrismaStatus } from './PrismaStatus';

export interface DatabaseStatus {
  connected: boolean;
  prisma: PrismaStatus;
}
