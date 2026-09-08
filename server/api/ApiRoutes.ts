import { ApiMethods } from './ApiMethods';
import { ControllerResponseMapper } from './ControllerResponseMapper';
import { RouteHandler } from './RouteHandler';

import { ApiRouteInfo } from '../types/ApiRouteInfo';
import { RouteCollection } from '../types/RouteCollection';

import { ApiConstants } from '../constants/ApiConstants';
import { ApiRouteConstants } from '../constants/ApiRouteConstants';
import { SettingsConstants } from '../constants/SettingsConstants';

import { ApiController } from './controllers/ApiController';
import { ApplicationController } from './controllers/ApplicationController';
import { DatabaseController } from './controllers/DatabaseController';
import { GamesController } from './controllers/GamesController';
import { GameStatisticsController } from './controllers/GameStatisticsController';
import { HealthController } from './controllers/HealthController';
import { RoutesController } from './controllers/RoutesController';
import { RoutesSummaryController } from './controllers/RoutesSummaryController';
import { SettingsController } from './controllers/SettingsController';

export class ApiRoutes {
  private apiController = new ApiController();
  private routesController =
    new RoutesController();
  private routesSummaryController =
    new RoutesSummaryController();
  private healthController =
    new HealthController();
  private applicationController =
    new ApplicationController();
  private gamesController =
    new GamesController();
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
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Api}`,
        handler: () =>
          this.apiController.getApi(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Routes}`,
        handler: () =>
          this.routesController.getRoutes(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Routes}/summary`,
        handler: () =>
          this.routesSummaryController.getSummary(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Health}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.healthController.getHealth()
          ),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Application}`,
        handler: () =>
          this.applicationController.getApplication(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Database}`,
        handler: () =>
          this.databaseController.getDatabase(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Games}`,
        handler: () =>
          this.gamesController.getGames(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.GameSummary}`,
        handler: () =>
          this.gameStatisticsController.getSummary(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Settings}`,
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
        ({ method, path }): ApiRouteInfo => ({
          route: {
            method,
            path,
          },
        })
      ),
    };
  }
}
