// Chinese, Japanese, and Korean.

import { sp } from '~/src/typos/utils';
import { IStyles } from '~/src/typos/Styles';
import { Typefaces } from '~/src/typos/Typefaces';

export const English: IStyles = {
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
    fontSize: sp(24),
    lineHeight: {
      type: sp(45),
      leading: 48,
    },
  },
  display1: {
    fontFamily: Typefaces.regular,
    fontSize: sp(34),
    lineHeight: {
      type: sp(34),
      leading: 40,
    },
  },
  headline: {
    fontFamily: Typefaces.regular,
    fontSize: sp(24),
    lineHeight: {
      type: sp(24),
      leading: 32,
    },
  },
  title: {
    fontFamily: Typefaces.medium,
    fontSize: sp(20),
  },
  subheading: {
    fontFamily: Typefaces.regular,
    fontSize: sp(16),
    lineHeight: {
      type: sp(15),
      leading: 24,
    },
  },
  body2: {
    fontFamily: Typefaces.medium,
    fontSize: sp(14),
    lineHeight: {
      type: sp(13),
      leading: 24,
    },
  },
  body1: {
    fontFamily: Typefaces.regular,
    fontSize: sp(14),
    lineHeight: {
      type: sp(13),
      leading: 20,
    },
  },
  caption: {
    fontFamily: Typefaces.regular,
    fontSize: sp(12),
  },
  button: {
    fontFamily: Typefaces.medium,
    fontSize: sp(14),
  },
};

export default English;
