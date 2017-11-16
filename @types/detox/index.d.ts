declare module 'detox';

declare namespace jest {
  interface Matchers<R> {
    toBeVisible: any;
  }
}

declare var device: any;
declare var element: any;
declare var by: any;
