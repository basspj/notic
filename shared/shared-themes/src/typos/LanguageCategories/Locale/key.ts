export interface ILocaleKeys {
  af: string;
  am: string;
  ar: string;
  az: string;
  bg: string;
  bn: string;
  ca: string;
  cs: string;
  cy: string;
  da: string;
  de: string;
  el: string;
  en: string;
  es: string;
  et: string;
  eu: string;
  fa: string;
  fi: string;
  fil: string;
  fr: string;
  gl: string;
  gu: string;
  hi: string;
  hr: string;
  hu: string;
  hy: string;
  id: string;
  is: string;
  it: string;
  iw: string;
  ja: string;
  ka: string;
  kk: string;
  km: string;
  kn: string;
  ko: string;
  ky: string;
  lo: string;
  lt: string;
  lv: string;
  mk: string;
  ml: string;
  mn: string;
  mr: string;
  ms: string;
  my: string;
  ne: string;
  nl: string;
  no: string;
  pa: string;
  pl: string;
  pt: string;
  ro: string;
  ru: string;
  si: string;
  sk: string;
  sl: string;
  sq: string;
  sr: string;
  sv: string;
  sw: string;
  ta: string;
  te: string;
  th: string;
  tr: string;
  uk: string;
  ur: string;
  uz: string;
  vi: string;
  zu: string;
}

export const LocaleKeys: ILocaleKeys = {
  af: 'af' as 'af',
  am: 'am' as 'am',
  ar: 'ar' as 'ar',
  az: 'az' as 'az',
  bg: 'bg' as 'bg',
  bn: 'bn' as 'bn',
  ca: 'ca' as 'ca',
  cs: 'cs' as 'cs',
  cy: 'cy' as 'cy',
  da: 'da' as 'da',
  de: 'de' as 'de',
  el: 'el' as 'el',
  en: 'en' as 'en',
  es: 'es' as 'es',
  et: 'et' as 'et',
  eu: 'eu' as 'eu',
  fa: 'fa' as 'fa',
  fi: 'fi' as 'fi',
  fil: 'fil' as 'fil',
  fr: 'fr' as 'fr',
  gl: 'gl' as 'gl',
  gu: 'gu' as 'gu',
  hi: 'hi' as 'hi',
  hr: 'hr' as 'hr',
  hu: 'hu' as 'hu',
  hy: 'hy' as 'hy',
  id: 'id' as 'id',
  is: 'is' as 'is',
  it: 'it' as 'it',
  iw: 'iw' as 'iw',
  ja: 'ja' as 'ja',
  ka: 'ka' as 'ka',
  kk: 'kk' as 'kk',
  km: 'km' as 'km',
  kn: 'kn' as 'kn',
  ko: 'ko' as 'ko',
  ky: 'ky' as 'ky',
  lo: 'lo' as 'lo',
  lt: 'lt' as 'lt',
  lv: 'lv' as 'lv',
  mk: 'mk' as 'mk',
  ml: 'ml' as 'ml',
  mn: 'mn' as 'mn',
  mr: 'mr' as 'mr',
  ms: 'ms' as 'ms',
  my: 'my' as 'my',
  ne: 'ne' as 'ne',
  nl: 'nl' as 'nl',
  no: 'no' as 'no',
  pa: 'pa' as 'pa',
  pl: 'pl' as 'pl',
  pt: 'pt' as 'pt',
  ro: 'ro' as 'ro',
  ru: 'ru' as 'ru',
  si: 'si' as 'si',
  sk: 'sk' as 'sk',
  sl: 'sl' as 'sl',
  sq: 'sq' as 'sq',
  sr: 'sr' as 'sr',
  sv: 'sv' as 'sv',
  sw: 'sw' as 'sw',
  ta: 'ta' as 'ta',
  te: 'te' as 'te',
  th: 'th' as 'th',
  tr: 'tr' as 'tr',
  uk: 'uk' as 'uk',
  ur: 'ur' as 'ur',
  uz: 'uz' as 'uz',
  vi: 'vi' as 'vi',
  zu: 'zu' as 'zu',
};

export const LocaleKeysObjectKeys = Object.keys(LocaleKeys);
export type TLocaleKeys = keyof typeof LocaleKeys;
