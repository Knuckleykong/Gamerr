export interface ApiRoute {
  method: string;
  path: string;
}

export class ApiRoutes {
  getRoutes(): ApiRoute[] {
    return [];
  }
}
