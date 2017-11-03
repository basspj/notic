import { Ids } from '~e2e/ids';
import { init } from '~e2e/init';

describe('Root', () => {
  beforeEach(async () => {
    if (typeof device === 'undefined') {
      await init();
    }
    await device.reloadReactNative();
  });

  test('should have root screen', async () => {
    await expect(element(by.id(Ids.ROOT))).toBeVisible();
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
