import { DatabaseConfig } from '../../database/DatabaseConfig';
import { DatabaseStatus } from '../../types/DatabaseStatus';
import { DatabaseVersion } from '../../types/DatabaseVersion';

export interface DatabaseResponse {
  config: DatabaseConfig;
  status: DatabaseStatus;
  version: DatabaseVersion;
}
