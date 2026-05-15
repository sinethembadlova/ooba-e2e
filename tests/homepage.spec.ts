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

	test('hero section is visible with primary CTAs', async ({ page }) => {
  	await expect(page.locator('h1')).toContainText(/home sweet home loan/i);
    await expect(page.locator('a', { hasText: /Pre-Approve Me/i })).toBeVisible();
    await expect(page.locator('a.btn.btn-default.btn-lg', { hasText: /Apply Now/i })).toBeVisible();
  });


});