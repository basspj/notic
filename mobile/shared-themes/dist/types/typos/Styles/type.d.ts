import { TStyleKeys, TLineHeightKeys } from './key';
export interface ILineHeight {
  type: number;
  leading: number;
}
export interface IStyle {
  fontFamily: string;
  fontSize: number;
}
export interface IStyleWithLineHeight {
  fontFamily: string;
  fontSize: number;
  lineHeight: ILineHeight;
}
export interface IStyles {
  display4: IStyle;
  display3: IStyle;
  display2: IStyleWithLineHeight;
  display1: IStyleWithLineHeight;
  headline: IStyleWithLineHeight;
  title: IStyle;
  subheading: IStyleWithLineHeight;
  body2: IStyleWithLineHeight;
  body1: IStyleWithLineHeight;
  caption: IStyle;
  button: IStyle;
}
export interface IStyleProps {
  typoStyle: TStyleKeys;
  typoLineHeight: TLineHeightKeys;
}
