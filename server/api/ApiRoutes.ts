import { ApiMethods } from './ApiMethods';
import { RouteHandler } from './RouteHandler';

import { HealthController } from './controllers/HealthController';
import { GamesController } from './controllers/GamesController';
import { GameStatisticsController } from './controllers/GameStatisticsController';
import { SettingsController } from './controllers/SettingsController';

export class ApiRoutes {
  private healthController = new HealthController();
  private gamesController = new GamesController();
  private gameStatisticsController =
    new GameStatisticsController();
  private settingsController =
    new SettingsController();

  getRoutes(): RouteHandler[] {
    return [
      {
        method: ApiMethods.GET,
        path: '/api/v1/health',
        handler: () =>
          this.healthController.getHealth(),
      },
      {
        method: ApiMethods.GET,
        path: '/api/v1/games',
        handler: () =>
          this.gamesController.getGames(),
      },
      {
        method: ApiMethods.GET,
        path: '/api/v1/games/summary',
        handler: () =>
          this.gameStatisticsController.getSummary(),
      },
      {
        method: ApiMethods.GET,
        path: '/api/v1/settings',
        handler: () =>
          this.settingsController.getSetting(
            'library.paths'
          ),
      },
    ];
  }
}
