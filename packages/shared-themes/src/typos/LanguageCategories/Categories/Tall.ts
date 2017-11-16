// Chinese, Japanese, and Korean.

import { sp } from '~/typos/utils';
import { IStyles } from '~/typos/Styles';
import { Typefaces } from '~/typos/Typefaces';

export const Tall: IStyles = {
  display4: {
    fontFamily: Typefaces.regular,
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
    fontFamily: Typefaces.bold,
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
    fontFamily: Typefaces.bold,
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
    fontFamily: Typefaces.bold,
    fontSize: sp(15),
  },
};

export default Tall;
