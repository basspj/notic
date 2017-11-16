import 'babel-polyfill';
import detox from 'detox';

import packageJson from '../package.json';

const config = packageJson.detox;

// Set the default timeout
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

export const init = () => detox.init(config);

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await detox.cleanup();
});

beforeEach(async () => {
  await device.reloadReactNative();
});
