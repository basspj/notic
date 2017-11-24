// Chinese, Japanese, and Korean.

import { sp } from '~/src/typos/utils';
import { IStyles } from '~/src/typos/Styles';
import { Typefaces } from '~/src/typos/Typefaces';

export const Dense: IStyles = {
  display4: {
    fontFamily: Typefaces.light,
    fontSize: sp(112),
  },
  display3: {
    fontFamily: Typefaces.regular,
    fontSize: sp(56),
  },
  display2: {
    fontFamily: Typefaces.regular,
    fontSize: sp(45),
    lineHeight: {
      type: sp(45),
      leading: 63,
    },
  },
  display1: {
    fontFamily: Typefaces.regular,
    fontSize: sp(34),
    lineHeight: {
      type: sp(34),
      leading: 48,
    },
  },
  headline: {
    fontFamily: Typefaces.regular,
    fontSize: sp(24),
    lineHeight: {
      type: sp(24),
      leading: 34,
    },
  },
  title: {
    fontFamily: Typefaces.medium,
    fontSize: sp(21),
  },
  subheading: {
    fontFamily: Typefaces.regular,
    fontSize: sp(17),
    lineHeight: {
      type: sp(16),
      leading: 26,
    },
  },
  body2: {
    fontFamily: Typefaces.medium,
    fontSize: sp(15),
    lineHeight: {
      type: sp(14),
      leading: 26,
    },
  },
  body1: {
    fontFamily: Typefaces.regular,
    fontSize: sp(15),
    lineHeight: {
      type: sp(14),
      leading: 23,
    },
  },
  caption: {
    fontFamily: Typefaces.regular,
    fontSize: sp(13),
  },
  button: {
    fontFamily: Typefaces.medium,
    fontSize: sp(15),
  },
};

export default Dense;
