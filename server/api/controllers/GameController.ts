import { GameService } from '../../services/GameService';
import { ControllerResponse } from './ControllerResponse';
import { Game } from '../../types/Game';

export class GamesController {
  private gameService = new GameService();

  async getGames(): Promise<ControllerResponse<Game[]>> {
    const result = await this.gameService.getAllGames();

    if (!result.success) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
      data: result.data,
    };
  }
}
