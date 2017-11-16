import { IThemeTypoColors } from './Themes';

export interface IThemesTypoColors {
  [key: string]: IThemeTypoColors;

  dark: IThemeTypoColors;
  light: IThemeTypoColors;
}
