import { alpha } from '../utils';

import { IThemeColors, IColors } from './type';
import { shared } from './shared';

const base = '#ffffff';

const activeAlpha = alpha(100);
const inactiveAlpha = alpha(50);
const active = activeAlpha(base);
const inactive = activeAlpha(base);

const theme: IColors = {
  activeAlpha,
  inactiveAlpha,
  active,
  inactive,

  primary: '#795548',
  primaryLight: '#a98274',
  primaryDark: '#4b2c20',
  secondary: '#cddc39',
  secondaryLight: '#ffff6e',
  secondaryDark: '#99aa00',
  bg: '#3e2723',
  error: '#E91E63',
  text: base,
};

export const Dark: IThemeColors = {
  ...theme,
  ...shared,
};

export default Dark;
