import color from 'color';

export type TtransformColor = (col: string) => string;
export type Talpha = (alp: number) => TtransformColor;

export const alpha: Talpha = (alp: number) => (col: string) =>
  color(col)
    .alpha(alp)
    .toString();
