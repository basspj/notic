import { TThemeKeys } from '~/themes';
import { IThemeColors } from './Themes';
import { IThemesColors } from './type';
export declare const Colors: IThemesColors;
export declare type TthemeColors = (theme: TThemeKeys) => IThemeColors;
export declare const themeColors: TthemeColors;
export default themeColors;
