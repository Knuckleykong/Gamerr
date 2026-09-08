import { SetupState } from './SetupState';

export interface SetupResult {
  success: boolean;
  state: SetupState;
  message: string;
}
