import { TThemeKeys } from './key';

export interface IThemeProps {
  theme: TThemeKeys;
}

export interface IThemeProvider {
  theme?: ITheme;
}
export interface ITheme {
  bg: string;
}
