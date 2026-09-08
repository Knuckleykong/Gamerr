import { HealthStatus } from './HealthStatus';

export interface ApplicationStatus {
  health: HealthStatus;
  setupComplete: boolean;
  version: string;
}
