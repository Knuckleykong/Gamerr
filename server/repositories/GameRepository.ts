import prisma from '../database/client';

export class GameRepository {
  async getAll() {
    return prisma.game.findMany();
  }

  async getById(id: number) {
    return prisma.game.findUnique({
      where: { id },
    });
  }

  async create() {}
}
