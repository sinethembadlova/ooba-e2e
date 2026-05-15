# ooba.co.za — Playwright E2E Scaffold

TypeScript + Playwright scaffold for ooba.co.za end-to-end tests.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers (first time only)
npx playwright install --with-deps

# 3. Run the smoke test to verify everything works
npm test
```

## Available scripts

| Command | Description |
|---|---|
| `npm test` | Run all tests headless across all browsers |
| `npm run test:headed` | Run with a visible browser window |
| `npm run test:ui` | Open interactive Playwright UI |
| `npm run test:chromium` | Chromium only (fastest) |
| `npm run test:mobile` | Pixel 5 + iPhone 13 |
| `npm run test:report` | Open the last HTML report |
| `npm run test:debug` | Step-through debugger |

## Project structure

```
ooba-e2e/
├── playwright.config.ts   # Browser projects & global settings
├── package.json
├── tsconfig.json
└── tests/
    ├── helpers.ts         # Shared utilities (cookie consent etc.)
    └── smoke.spec.ts      # Sanity check — replace/extend with your tests
```

## Adding tests

Drop new `*.spec.ts` files inside `tests/`. Import helpers as needed:

```ts
import { test, expect } from '@playwright/test';
import { gotoAndAcceptCookies } from './helpers';

test('my new test', async ({ page }) => {
  await gotoAndAcceptCookies(page, '/some-page/');
  await expect(page.locator('h1')).toBeVisible();
});
```
