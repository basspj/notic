import puppeteer from 'puppeteer';
import devices from 'puppeteer/DeviceDescriptors';
import { spawn } from 'child_process';

import { projectDir, wait } from './utils';

let child;
let page;
let browser;

// const width = 1920;
// const height = 1080;

beforeAll(async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    // args: [`--window-size=${width},${height}`],
    args: ['--no-sandbox'],
  });

  page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  // await page.setViewport({ width, height });

  child = await spawn('yarn', ['dev'], {
    shell: true,
    cwd: projectDir,
    detached: true,
  });

  await wait(15000);
});

describe('e2e', () => {
  test(
    'goto localhost',
    async () => {
      await page.goto('http://localhost:3000/');
      await page.screenshot({ path: 'screenshot/web/client/iPhone 6.png', fullPage: true });
    },
    16000,
  );

  test('expect title', async () => {
    const title = await page.title();
    expect(title).toBe('Notic');
  });
});

afterAll(() => {
  browser.close();
  child.stdin.pause();
  process.kill(-child.pid);
  child.kill();
});
