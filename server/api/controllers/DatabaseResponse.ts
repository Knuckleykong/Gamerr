import { DatabaseConfig } from '../../database/DatabaseConfig';
import { DatabaseStatus } from '../../types/DatabaseStatus';

export interface DatabaseResponse {
  config: DatabaseConfig;
  status: DatabaseStatus;
}
