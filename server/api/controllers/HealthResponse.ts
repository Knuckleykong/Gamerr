import { DatabaseResponse } from './DatabaseResponse';

export interface HealthResponse {
  status: string;
  service: string;
  database: DatabaseResponse;
}
