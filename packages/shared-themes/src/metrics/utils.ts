import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = (size: number) =>
  width / guidelineBaseWidth * size;
export const verticalScale = (size: number) =>
  height / guidelineBaseHeight * size;
export const moderateHorizontalScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor: number = 0.5) =>
  size + (verticalScale(size) - size) * factor;
