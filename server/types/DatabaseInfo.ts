import { DatabaseConfig } from '../database/DatabaseConfig';
import { DatabaseStatus } from './DatabaseStatus';

export interface DatabaseInfo {
  config: DatabaseConfig;
  status: DatabaseStatus;
}
