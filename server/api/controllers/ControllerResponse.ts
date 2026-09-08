import { ControllerError } from './ControllerError';

export interface ControllerResponse<T> {
  success: boolean;
  data?: T;
  error?: ControllerError;
}
