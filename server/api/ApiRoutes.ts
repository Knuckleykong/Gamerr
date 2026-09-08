export interface ApiRoute {
  method: string;
  path: string;
}

export class ApiRoutes {
  getRoutes(): ApiRoute[] {
    return [
      {
        method: 'GET',
        path: '/api/v1/health',
      },
    ];
  }
}
