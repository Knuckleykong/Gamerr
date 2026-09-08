import prisma from '../database/client';

export class GameService {
  async getAllGames() {
    return prisma.game.findMany();
  }

  async getGameById(id: number) {
    return prisma.game.findUnique({
      where: { id },
    });
  }
}
