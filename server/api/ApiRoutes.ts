import { ApiMethods } from './ApiMethods';
import { RouteHandler } from './RouteHandler';

import { RouteCollection } from '../types/RouteCollection';

import { ApiConstants } from '../constants/ApiConstants';
import { SettingsConstants } from '../constants/SettingsConstants';

import { ApiController } from './controllers/ApiController';
import { ApplicationController } from './controllers/ApplicationController';
import { DatabaseController } from './controllers/DatabaseController';
import { GamesController } from './controllers/GamesController';
import { GameStatisticsController } from './controllers/GameStatisticsController';
import { HealthController } from './controllers/HealthController';
import { SettingsController } from './controllers/SettingsController';

export class ApiRoutes {
  private apiController = new ApiController();
  private healthController = new HealthController();
  private applicationController =
    new ApplicationController();
  private gamesController = new GamesController();
  private gameStatisticsController =
    new GameStatisticsController();
  private settingsController =
    new SettingsController();
  private databaseController =
    new DatabaseController();

  getRoutes(): RouteHandler[] {
    return [
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/api`,
        handler: () =>
          this.apiController.getApi(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/health`,
        handler: () =>
          this.healthController.getHealth(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/application`,
        handler: () =>
          this.applicationController.getApplication(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/database`,
        handler: () =>
          this.databaseController.getDatabase(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/games`,
        handler: () =>
          this.gamesController.getGames(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/games/summary`,
        handler: () =>
          this.gameStatisticsController.getSummary(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}/settings`,
        handler: () =>
          this.settingsController.getSetting(
            SettingsConstants.LibraryPaths
          ),
      },
    ];
  }

  getRouteCollection(): RouteCollection {
    return {
      routes: this.getRoutes().map(
        ({ method, path }) => ({
          method,
          path,
        })
      ),
    };
  }
}
