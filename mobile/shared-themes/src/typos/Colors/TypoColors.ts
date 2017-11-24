import { TThemeKeys } from '~/src/themes';

import {
  TypoDark as dark,
  TypoLight as light,
  IThemeTypoColors,
} from './Themes';
import { IThemesTypoColors } from './type';

export const TypoColors: IThemesTypoColors = {
  dark,
  light,
};

export type TthemeTypoColors = (theme: TThemeKeys) => IThemeTypoColors;
export const themeTypoColors: TthemeTypoColors = (theme: TThemeKeys) =>
  TypoColors[theme];
export default themeTypoColors;
