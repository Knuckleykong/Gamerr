import { GameService } from './GameService';
import { GameSummary } from '../types/GameSummary';

export class GameStatisticsService {
  private gameService = new GameService();

  async getSummary(): Promise<GameSummary> {
    const result = await this.gameService.getAllGames();

    if (!result.success) {
      return {
        totalGames: 0,
      };
    }

    return {
      totalGames: result.data?.length ?? 0,
    };
  }
}
