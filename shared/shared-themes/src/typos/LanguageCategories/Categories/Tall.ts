// Chinese, Japanese, and Korean.

import { IStyles } from '~/src/typos/Styles';
import { Typefaces } from '~/src/typos/Typefaces';

export const Tall: IStyles = {
  display4: {
    fontFamily: Typefaces.regular,
    fontSize: 112,
  },
  display3: {
    fontFamily: Typefaces.regular,
    fontSize: 56,
  },
  display2: {
    fontFamily: Typefaces.regular,
    fontSize: 45,
    lineHeight: {
      type: 45,
      leading: 63,
    },
  },
  display1: {
    fontFamily: Typefaces.regular,
    fontSize: 34,
    lineHeight: {
      type: 34,
      leading: 48,
    },
  },
  headline: {
    fontFamily: Typefaces.regular,
    fontSize: 24,
    lineHeight: {
      type: 24,
      leading: 34,
    },
  },
  title: {
    fontFamily: Typefaces.bold,
    fontSize: 21,
  },
  subheading: {
    fontFamily: Typefaces.regular,
    fontSize: 17,
    lineHeight: {
      type: 16,
      leading: 26,
    },
  },
  body2: {
    fontFamily: Typefaces.bold,
    fontSize: 15,
    lineHeight: {
      type: 14,
      leading: 26,
    },
  },
  body1: {
    fontFamily: Typefaces.regular,
    fontSize: 15,
    lineHeight: {
      type: 14,
      leading: 23,
    },
  },
  caption: {
    fontFamily: Typefaces.regular,
    fontSize: 13,
  },
  button: {
    fontFamily: Typefaces.bold,
    fontSize: 15,
  },
};

export default Tall;
