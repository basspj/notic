import { IStyles } from '~/typos';

import { TLanguageCategoryKeys } from './Categories';
import { ILocaleKeys } from './Locale';

export interface ILanguageCategories {
  [key: string]: IStyles;

  english: IStyles;
  dense: IStyles;
  tall: IStyles;
}

export interface ILocaleLanguageCategories extends ILocaleKeys {
  [key: string]: string;
}

export interface ILanguageCategoryProps {
  typoLangCat: TLanguageCategoryKeys;
}
