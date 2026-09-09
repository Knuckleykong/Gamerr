import { DatabaseConfig } from '../database/DatabaseConfig';
import { DatabaseStatus } from './DatabaseStatus';
import { DatabaseVersion } from '../database/DatabaseVersion';

export interface DatabaseInfo {
  config: DatabaseConfig;
  status: DatabaseStatus;
  version: DatabaseVersion;
}
