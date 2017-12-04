// Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export type Tscale = (size: number) => number;
export type TmoderateScale = (size: number, factor?: number) => number;

export type TwidthScale = (width: number) => Tscale;
export type TheightScale = (height: number) => Tscale;

export type TmoderateWidthScale = (width: number) => TmoderateScale;
export type TmoderateHeightScale = (height: number) => TmoderateScale;

export const widthScale: TwidthScale = (width) => (size) => width / guidelineBaseWidth * size;

export const heightScale: TheightScale = (height) => (size: number) =>
  height / guidelineBaseHeight * size;

export const moderateWidthScale: TmoderateWidthScale = (width: number) => (
  size: number,
  factor: number = 0.5,
) => size + (widthScale(width)(size) - size) * factor;

export const moderateHeightScale: TmoderateHeightScale = (height: number) => (
  size: number,
  factor: number = 0.5,
) => size + (heightScale(height)(size) - size) * factor;
