import { EnvConfig } from '@mobile/config';

describe('Root', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('should have root screen', async () => {
    await expect(element(by.id(EnvConfig.babel.E2E_TEST_IDS.ROOT))).toBeVisible();
  });

  // test('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // test('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
