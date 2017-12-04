import regression from 'regression';

import { ModelKeys, TModelKeys } from './key';

type TreduceEquation = (x: number) => (res: number, num: number, idx: number) => number;
const reduceEquation: TreduceEquation = (x) => (res, num, idx) => res + num * x ** idx;

export type Tfit = (method: TModelKeys, arr: number[], x: number) => number;
export const fit: Tfit = (method, arr, x) => {
  const reduceEquationX = reduceEquation(x);
  let result;
  switch (method) {
    case ModelKeys.poly:
      result = regression('polynomial', arr, 3);
      break;
    default:
    case ModelKeys.linear:
      result = regression('linear', arr);
      break;
  }
  const { equation } = result;
  return equation.reduce(reduceEquationX);
};
