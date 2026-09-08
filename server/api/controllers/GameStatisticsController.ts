import { GameStatisticsService } from '../../services/GameStatisticsService';
import { ControllerCodes } from './ControllerCodes';
import { ControllerMessages } from './ControllerMessages';
import { ControllerResponse } from './ControllerResponse';
import { GameSummaryResponse } from './GameSummaryResponse';

export class GameStatisticsController {
  private gameStatisticsService =
    new GameStatisticsService();

  async getSummary(): Promise<
    ControllerResponse<GameSummaryResponse>
  > {
    try {
      const summary =
        await this.gameStatisticsService.getSummary();

      return {
        success: true,
        data: {
          summary,
        },
      };
    } catch {
      return {
        success: false,
        error: {
          code: ControllerCodes.GameError,
          message:
            ControllerMessages.GameStatisticsUnavailable,
        },
      };
    }
  }
}
