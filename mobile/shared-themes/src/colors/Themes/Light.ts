import { alpha } from '../utils';

import { IThemeColors, IColors } from './type';
import { shared } from './shared';

const base = '#000000';

const activeAlpha = alpha(54);
const inactiveAlpha = alpha(38);
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
  bg: '#e1e2e1',
  error: '#E91E63',
  text: base,
};

export const Light: IThemeColors = {
  ...theme,
  ...shared,
};

export default Light;
