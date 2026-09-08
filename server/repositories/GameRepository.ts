import prisma from '../database/client';
import { RepositoryResult } from './RepositoryResult';
import { Game } from '../types/Game';

export class GameRepository {
  async getAll(): Promise<RepositoryResult<Game[]>> {
    try {
      const games = await prisma.game.findMany();

      return {
        success: true,
        data: games,
      };
    } catch (error) {
      return {
        success: false,
        error: String(error),
      };
    }
  }

  async getById(
    id: number
  ): Promise<RepositoryResult<Game>> {
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

  async getByPath(
    path: string
  ): Promise<RepositoryResult<Game>> {
    try {
      const game = await prisma.game.findUnique({
        where: { path },
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

  async create(
    game: Omit<Game, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<RepositoryResult<Game>> {
    try {
      const createdGame = await prisma.game.create({
        data: {
          title: game.title,
          platform: game.platform,
          path: game.path,
          fileSize: game.fileSize,
        },
      });

      return {
        success: true,
        data: createdGame,
      };
    } catch (error) {
      return {
        success: false,
        error: String(error),
      };
    }
  }
}
