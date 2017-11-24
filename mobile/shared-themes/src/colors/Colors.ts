import { TThemeKeys } from '~/src/themes';

import { Dark as dark, Light as light, IThemeColors } from './Themes';
import { IThemesColors } from './type';

export const Colors: IThemesColors = {
  dark,
  light,
};

export type TthemeColors = (theme: TThemeKeys) => IThemeColors;
export const themeColors: TthemeColors = (theme: TThemeKeys) => Colors[theme];
export default themeColors;
