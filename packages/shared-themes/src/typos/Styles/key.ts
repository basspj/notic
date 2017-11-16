export interface IStyleKeys {
  display4: string;
  display3: string;
  display2: string;
  display1: string;
  headline: string;
  title: string;
  subheading: string;
  body2: string;
  body1: string;
  caption: string;
  button: string;
}

export interface ILineHeightKeys {
  type: string;
  leading: string;
}

export const StyleKeys: IStyleKeys = {
  display4: 'display4' as 'display4',
  display3: 'display3' as 'display3',
  display2: 'display2' as 'display2',
  display1: 'display1' as 'display1',
  headline: 'headline' as 'headline',
  title: 'title' as 'title',
  subheading: 'subheading' as 'subheading',
  body2: 'body2' as 'body2',
  body1: 'body1' as 'body1',
  caption: 'caption' as 'caption',
  button: 'button' as 'button',
};

export type TStyleKeys = keyof typeof StyleKeys;

export const LineHeightKeys: ILineHeightKeys = {
  type: 'type' as 'type',
  leading: 'leading' as 'leading',
};

export type TLineHeightKeys = keyof typeof LineHeightKeys;
