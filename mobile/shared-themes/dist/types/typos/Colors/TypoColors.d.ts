import { TThemeKeys } from '~/themes';
import { IThemeTypoColors } from './Themes';
import { IThemesTypoColors } from './type';
export declare const TypoColors: IThemesTypoColors;
export declare type TthemeTypoColors = (theme: TThemeKeys) => IThemeTypoColors;
export declare const themeTypoColors: TthemeTypoColors;
export default themeTypoColors;
