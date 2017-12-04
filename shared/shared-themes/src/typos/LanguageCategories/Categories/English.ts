// Chinese, Japanese, and Korean.

import { IStyles } from '~/src/typos/Styles';
import { Typefaces } from '~/src/typos/Typefaces';

export const English: IStyles = {
  display4: {
    fontFamily: Typefaces.light,
    fontSize: 112,
  },
  display3: {
    fontFamily: Typefaces.regular,
    fontSize: 56,
  },
  display2: {
    fontFamily: Typefaces.regular,
    fontSize: 24,
    lineHeight: {
      type: 45,
      leading: 48,
    },
  },
  display1: {
    fontFamily: Typefaces.regular,
    fontSize: 34,
    lineHeight: {
      type: 34,
      leading: 40,
    },
  },
  headline: {
    fontFamily: Typefaces.regular,
    fontSize: 24,
    lineHeight: {
      type: 24,
      leading: 32,
    },
  },
  title: {
    fontFamily: Typefaces.medium,
    fontSize: 20,
  },
  subheading: {
    fontFamily: Typefaces.regular,
    fontSize: 16,
    lineHeight: {
      type: 15,
      leading: 24,
    },
  },
  body2: {
    fontFamily: Typefaces.medium,
    fontSize: 14,
    lineHeight: {
      type: 13,
      leading: 24,
    },
  },
  body1: {
    fontFamily: Typefaces.regular,
    fontSize: 14,
    lineHeight: {
      type: 13,
      leading: 20,
    },
  },
  caption: {
    fontFamily: Typefaces.regular,
    fontSize: 12,
  },
  button: {
    fontFamily: Typefaces.medium,
    fontSize: 14,
  },
};

export default English;
