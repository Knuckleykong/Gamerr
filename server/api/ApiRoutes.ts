import { ApiMethods } from './ApiMethods';
import { ControllerResponseMapper } from './controllers/ControllerResponseMapper';
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
import { SettingsController } from './controllers/SettingsController';

import { SetupController } from './controllers/SetupController';
import { SetupWizardController } from './controllers/SetupWizardController';
import { MetadataSetupController } from './controllers/MetadataSetupController';
import { ScanSetupController } from './controllers/ScanSetupController';
import { CompleteSetupController } from './controllers/CompleteSetupController';

export class ApiRoutes {
  private setupController =
    new SetupController();

  private setupWizardController =
    new SetupWizardController();

  private metadataSetupController =
    new MetadataSetupController();

  private scanSetupController =
    new ScanSetupController();

  private completeSetupController =
    new CompleteSetupController();

  private apiController =
    new ApiController();

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
        path: '/',
        handler: async () =>
          this.setupController.getSetup(),
      },
      {
        method: ApiMethods.GET,
        path: '/setup',
        handler: async () =>
          this.setupWizardController.getSetup(),
      },
      {
        method: ApiMethods.GET,
        path: '/setup/metadata',
        handler: async () =>
          this.metadataSetupController.getSetup(),
      },
      {
        method: ApiMethods.GET,
        path: '/setup/scan',
        handler: async () =>
          this.scanSetupController.getSetup(),
      },
      {
        method: ApiMethods.GET,
        path: '/setup/complete',
        handler: async () =>
          this.completeSetupController.getSetup(),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Api}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.apiController.getApi()
          ),
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
        handler: async () =>
          ControllerResponseMapper.map(
            await this.applicationController.getApplication()
          ),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Database}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.databaseController.getDatabase()
          ),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Games}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.gamesController.getGames()
          ),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.GameSummary}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.gameStatisticsController.getSummary()
          ),
      },
      {
        method: ApiMethods.GET,
        path: `${ApiConstants.BasePath}${ApiRouteConstants.Settings}`,
        handler: async () =>
          ControllerResponseMapper.map(
            await this.settingsController.getSetting(
              SettingsConstants.LibraryPaths
            )
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
