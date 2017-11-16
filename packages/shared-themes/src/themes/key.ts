export interface IThemeKeys {
  dark: string;
  light: string;
}

export const ThemeKeys: IThemeKeys = {
  dark: 'dark' as 'dark',
  light: 'light' as 'light',
};

export const ThemeKeysObjectKeys = Object.keys(ThemeKeys);
export type TThemeKeys = keyof typeof ThemeKeys;
