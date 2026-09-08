import { HealthController } from './controllers/HealthController';
import { RouteHandler } from './RouteHandler';

export class ApiRoutes {
  private healthController = new HealthController();

  getRoutes(): RouteHandler[] {
    return [
      {
        method: 'GET',
        path: '/api/v1/health',
        handler: () =>
          this.healthController.getHealth(),
      },
    ];
  }
}
