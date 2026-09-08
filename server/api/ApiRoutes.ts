import { HealthController } from './controllers/HealthController';
import { GamesController } from './controllers/GamesController';
import { RouteHandler } from './RouteHandler';

export class ApiRoutes {
  private healthController = new HealthController();
  private gamesController = new GamesController();

  getRoutes(): RouteHandler[] {
    return [
      {
        method: 'GET',
        path: '/api/v1/health',
        handler: () =>
          this.healthController.getHealth(),
      },
      {
        method: 'GET',
        path: '/api/v1/games',
        handler: () =>
          this.gamesController.getGames(),
      },
    ];
  }
}
