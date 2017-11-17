import {
  Test as test,
  Release as release,
  BabelEnvKeys,
  IBabelConfig,
} from './Env';

import { IBabelEnv } from './type';

export const BabelEnv: IBabelEnv = {
  test,
  release,
};

const env: string = __DEV__ ? BabelEnvKeys.test : BabelEnvKeys.release;

export const Babel: IBabelConfig = BabelEnv[env];
export default Babel;
