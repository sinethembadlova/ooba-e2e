import { test, expect } from '@playwright/test';
import { gotoAndAcceptCookies } from './helpers';

test.describe('Smoke test', () => {
  test('homepage loads and has correct title', async ({ page }) => {
    await gotoAndAcceptCookies(page, '/');
    await expect(page).toHaveTitle(/ooba/i);
  });
});
