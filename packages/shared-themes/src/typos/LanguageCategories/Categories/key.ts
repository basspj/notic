export interface ILanguageCategoryKeys {
  english: string;
  dense: string;
  tall: string;
}

export const LanguageCategoryKeys: ILanguageCategoryKeys = {
  english: 'english' as 'english',
  dense: 'dense' as 'dense',
  tall: 'tall' as 'tall',
};

export const LanguageCategoryKeysObjectKey = Object.keys(LanguageCategoryKeys);
export type TLanguageCategoryKeys = keyof typeof LanguageCategoryKeys;
