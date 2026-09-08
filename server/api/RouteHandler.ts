export interface RouteHandler {
  method: string;
  path: string;
  handler: () => Promise
