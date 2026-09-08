import { GameService } from './GameService';
import { GameSummary } from '../types/GameSummary';

export class GameStatisticsService {
  private gameService = new GameService();

  async getSummary(): Promise<GameSummary> {
    return {
      totalGames: 0,
    };
  }
}
