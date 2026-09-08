import { GameService } from '../../services/GameService';

export class GamesController {
  private gameService = new GameService();

  async getGames() {
    return this.gameService.getAllGames();
  }
}
