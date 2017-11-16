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
export declare const StyleKeys: IStyleKeys;
export declare type TStyleKeys = keyof typeof StyleKeys;
export declare const LineHeightKeys: ILineHeightKeys;
export declare type TLineHeightKeys = keyof typeof LineHeightKeys;
