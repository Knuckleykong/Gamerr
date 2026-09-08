import { ApplicationInfo } from './ApplicationInfo';
import { ApplicationVersion } from './ApplicationVersion';

export interface ApplicationMetadata
  extends ApplicationInfo,
    ApplicationVersion {}
