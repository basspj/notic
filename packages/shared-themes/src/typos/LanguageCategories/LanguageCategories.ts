import { IStyles } from '~/typos';

import {
  Dense,
  English,
  Tall,
  LanguageCategoryKeysObjectKey,
} from './Categories';
import { cleanLocale } from './Locale';
import { LocaleLanguageCategories } from './LocaleLanguageCategories';
import { ILanguageCategories } from './type';

export const LanguageCategories: ILanguageCategories = {
  dense: Dense,
  english: English,
  tall: Tall,
};

export type TlangCategory = (rawLocale: string) => string;
export const langCategory: TlangCategory = (rawLocale: string) =>
  LocaleLanguageCategories[cleanLocale(rawLocale)];

export type TlangCategoryStyles = (cat: string) => IStyles;
export const langCategoryStyles: TlangCategoryStyles = (cat: string) =>
  LanguageCategoryKeysObjectKey.indexOf(cat) > -1
    ? LanguageCategories[cat]
    : LanguageCategories[langCategory(cat)];
export default langCategoryStyles;
