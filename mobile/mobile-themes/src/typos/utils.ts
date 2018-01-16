import { PixelRatio } from 'react-native';

const sp = (size: number) => PixelRatio.getFontScale() * size;

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

export const TypoUtils = {
  sp,
};

export default TypoUtils;
