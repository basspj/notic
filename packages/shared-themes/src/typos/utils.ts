import { PixelRatio } from 'react-native';

export const sp = (size: number) => PixelRatio.getFontScale() * size;

// TODO: auto fit based on layout height, layout width, fontSize, textLength

// export const autoFit = (
//   height: number,
//   width: number,
//   textLength: number,
//   languageCategory: ILanguageCategoryKeys,
// ) => {
//   height === fontSize;
//   width;

//   textLength;
// };

export const Utils = {
  sp,
};

export default Utils;
