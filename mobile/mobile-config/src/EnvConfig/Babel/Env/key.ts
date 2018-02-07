export interface IBabelEnvKeys {
  test: string;
  release: string;
}

export const BabelEnvKeys: IBabelEnvKeys = {
  test: 'test' as 'test',
  release: 'release' as 'release',
};

export const BabelEnvKeysObjectKeys = Object.keys(BabelEnvKeys);
export type TBabelEnvKeys = keyof IBabelEnvKeys;
