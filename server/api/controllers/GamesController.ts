import { GameService } from '../../services/GameService';
import { ControllerResponse } from './ControllerResponse';
import { ControllerCodes } from './ControllerCodes';
import { GamesResponse } from './GamesResponse';

export class GamesController {
  private gameService = new GameService();

  async getGames(): Promise<
    ControllerResponse<GamesResponse>
  > {
    const result = await this.gameService.getAllGames();

    if (!result.success) {
      return {
        success: false,
        error: {
          code: ControllerCodes.GameError,
          message: result.error ?? 'Unknown error',
        },
      };
    }

    const games = result.data ?? [];

    return {
      success: true,
      data: {
        games,
        count: games.length,
      },
    };
  }
}
