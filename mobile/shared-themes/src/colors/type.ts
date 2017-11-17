import { IThemeColors } from './Themes';

export interface IThemesColors {
  [key: string]: IThemeColors;

  dark: IThemeColors;
  light: IThemeColors;
}
