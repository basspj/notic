import { TtransformColor } from '../utils';
export interface IColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  bg: string;
  error: string;
  text: string;
  active: string;
  inactive: string;
  activeAlpha: TtransformColor;
  inactiveAlpha: TtransformColor;
}
export interface ISharedColors {
  transparent: string;
}
export interface IThemeColors extends IColors, ISharedColors {}
