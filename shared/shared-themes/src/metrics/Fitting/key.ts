export interface IModelKeys {
  linear: string;
  poly: string;
}

export const ModelKeys: IModelKeys = {
  linear: 'linear' as 'linear',
  poly: 'poly' as 'poly',
};

export const ModelKeysObjectKeys = Object.keys(ModelKeys);
export type TModelKeys = keyof typeof ModelKeys;
