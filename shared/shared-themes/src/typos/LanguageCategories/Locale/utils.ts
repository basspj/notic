import { LocaleKeys, LocaleKeysObjectKeys } from './key';

export type TCleanLocale = (locale: string) => string;

export const cleanLocale: TCleanLocale = (locale: string) => {
  if (locale) {
    let clean = locale;

    if (clean.length > 3) {
      const locale2 = clean[2];
      clean = locale.substring(0, locale2 === ('-' || locale2.toUpperCase()) ? 2 : 3);
    }

    if (LocaleKeysObjectKeys.indexOf(clean) > -1) {
      return clean;
    }

    return LocaleKeys.en;
  }
  return LocaleKeys.en;
};
