import { ApiMethods } from './ApiMethods';
import { HealthController } from './controllers/HealthController';
import { GamesController } from './controllers/GamesController';
import { SettingsController } from './controllers/SettingsController';
import { RouteHandler } from './RouteHandler';

export class ApiRoutes {
  private healthController = new HealthController();
  private gamesController = new GamesController();
  private settingsController = new SettingsController();

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
        path: '/api/v1/settings',
        handler: () =>
          this.settingsController.getSetting(
            'library.paths'
          ),
      },
    ];
  }
}
