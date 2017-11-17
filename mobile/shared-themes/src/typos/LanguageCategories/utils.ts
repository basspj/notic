import { cleanLocale } from './Locale';
import LocaleLanguageCategories from './LocaleLanguageCategories';

export type TlanguageCategory = (locale: string) => string;

export const languageCategory: TlanguageCategory = (locale: string) =>
  LocaleLanguageCategories[cleanLocale(locale)];
