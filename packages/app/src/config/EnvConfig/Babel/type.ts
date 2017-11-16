import { IBabelConfig } from './Env';

export interface IBabelEnv {
  [key: string]: IBabelConfig;
  test: IBabelConfig;
  release: IBabelConfig;
}
