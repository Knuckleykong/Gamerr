import prisma from '../database/client';
import { RepositoryResult } from './RepositoryResult';

export class GameRepository {
  async getById(id: number): Promise<RepositoryResult<any>> {
    try {
      const game = await prisma.game.findUnique({
        where: { id },
      });

      if (!game) {
        return {
          success: false,
          error: 'Game not found',
        };
      }

      return {
        success: true,
        data: game,
      };
    } catch (error) {
      return {
        success: false,
        error: String(error),
      };
    }
  }
}
