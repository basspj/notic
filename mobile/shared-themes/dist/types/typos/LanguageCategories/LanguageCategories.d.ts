import { IStyles } from '~/typos';
import { ILanguageCategories } from './type';
export declare const LanguageCategories: ILanguageCategories;
export declare type TlangCategory = (rawLocale: string) => string;
export declare const langCategory: TlangCategory;
export declare type TlangCategoryStyles = (cat: string) => IStyles;
export declare const langCategoryStyles: TlangCategoryStyles;
export default langCategoryStyles;
