import { test, expect } from '@playwright/test';
import { gotoAndAcceptCookies } from './helpers';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await gotoAndAcceptCookies(page, '/');
  });

  test('primary nav links are visible on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Primary nav hidden on mobile');
    const nav = page.locator('nav, header').first();
    await expect(nav.locator('a', { hasText: /Calculators/i })).toBeVisible();
    await expect(nav.locator('a', { hasText: /Advice/i })).toBeVisible();
    await expect(nav.locator('a', { hasText: /Why ooba/i })).toBeVisible();
    await expect(nav.locator('a', { hasText: /Insurance/i })).toBeVisible();
    await expect(nav.locator('a', { hasText: /Get a Home Loan/i })).toBeVisible();
  });
});