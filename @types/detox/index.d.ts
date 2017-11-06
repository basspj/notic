declare module 'detox';

declare namespace jest {
  interface Matchers<R> {
    toBeVisible: any;
  }
}
