import 'babel-polyfill';
import detox from 'detox';

import packageJson from '~/package.json';

const config = packageJson.detox;

// Set the default timeout
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
