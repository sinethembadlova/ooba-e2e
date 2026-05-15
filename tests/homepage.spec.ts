import { test, expect } from '@playwright/test';
import { gotoAndAcceptCookies } from './helpers';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await gotoAndAcceptCookies(page, '/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/ooba Home Loans/i);
  });

	test('displays the ooba logo', async ({ page }) => {
    const logo = page.locator('img[alt*="ooba"]').first();
    await expect(logo).toBeVisible();
  });
});