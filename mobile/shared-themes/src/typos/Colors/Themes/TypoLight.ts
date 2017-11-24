import { Colors, alpha } from '~/src/colors';

import { IThemeTypoColors } from './type';

const { light: { text } } = Colors;

const primaryAlpha = alpha(87);
const secondaryAlpha = alpha(54);
const disabledAlpha = alpha(38);
const hintAlpha = alpha(38);
const dividersAlpha = alpha(12);

const primary = primaryAlpha(text);
const secondary = secondaryAlpha(text);
const disabled = disabledAlpha(text);
const hint = hintAlpha(text);
const dividers = dividersAlpha(text);

export const TypoLight: IThemeTypoColors = {
  primary,
  secondary,
  disabled,
  hint,
  dividers,

  display4: secondary,
  display3: secondary,
  display2: secondary,
  display1: secondary,
  headline: primary,
  title: primary,
  subheading: primary,
  body2: primary,
  body1: primary,
  caption: secondary,
  button: primary,
};

export default TypoLight;
