import { RouteInfo } from '../types/RouteInfo';

export interface RouteHandler extends RouteInfo {
  handler: () => Promise
