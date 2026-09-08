import { GameRepository } from '../repositories/GameRepository';

export class GameService {
  private gameRepository = new GameRepository();

  async getAllGames() {
    return this.gameRepository.getAll();
  }

  async getGameById(id: number) {
    return this.gameRepository.getById(id);
  }

  async createGame(
    title: string,
    platform: string,
    path: string,
    fileSize?: bigint | null
  ) {
    return this.gameRepository.create({
      title,
      platform,
      path,
      fileSize,
    });
  }
}
