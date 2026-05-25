import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: 'src/features/**/*.feature',
  steps: 'src/steps/**/*.ts',
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //BDD
  testDir,
  //testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // Maximum time expect() should wait for the condition to be met.
  timeout: 5000,

  use: {
    headless: true,
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://rahulshettyacademy.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        permissions: ['geolocation'],
      },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      headless: false,
      screenshot: 'on',
      video: 'retain-on-failure',
      permissions: ['geolocation'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      headless: false,
      screenshot: 'on',
      video: 'retain-on-failure',
      permissions: ['geolocation'],
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },*/


    /* Test against mobile viewports. */


    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
