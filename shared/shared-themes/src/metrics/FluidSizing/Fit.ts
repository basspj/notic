import regression from 'regression';

type TreduceEquation = (
  x: number,
  length?: number,
) => (res: number, num: number, idx: number) => number;
const reduceEquation: TreduceEquation = (x, length) => (res, num, idx) =>
  res + num * x ** (length ? length - idx - 1 : idx);

export type Tfit = (arr: any[], min: number, max: number, x: number) => number;

export const fit: Tfit = (arr, min, max, x) => {
  const { length } = arr;

  const minX = arr[0][0];
  const maxX = arr[length - 1][0];

  if (x <= minX) {
    return min;
  }
  if (x >= maxX) {
    return max;
  }

  const result = regression('polynomial', arr, 4);
  const reduceEquationX = reduceEquation(x);
  const y = result.equation.reduce(reduceEquationX);

  if (y <= min) {
    return min;
  }
  if (y >= max) {
    return max;
  }

  return y;
};
