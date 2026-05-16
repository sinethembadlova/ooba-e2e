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

  test('phone number is displayed in the header', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Phone number hidden in mobile menu');
    await expect(page.locator('text=0860 00 66 22').first()).toBeVisible();
  });

  test('bank partner logos section is present', async ({ page }) => {
    // The section heading
    await expect(
      page.locator('text=/work with all the leading banks/i'),
    ).toBeVisible();
  });

  test('3-step process section is visible', async ({ page }) => {
    await expect(page.locator('text=/3 easy steps/i')).toBeVisible();
    await expect(page.getByRole('heading', { name: '1. Get pre-approved' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '2. Find a home' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '3. Get the best bond' })).toBeVisible();
  });

  test('customer testimonials section is visible', async ({ page }) => {
    await expect(page.locator('text=/Ranked #1/i')).toBeVisible();
    await expect(page.locator('text=/4.86/i')).toBeVisible();
  });

  test('FAQ section expands on click', async ({ page }) => {
    const faq = page.locator('text=/Can I get a home loan without a deposit/i');
    await expect(faq).toBeVisible();
    await faq.click();
    await expect(
      page.locator('text=/100% loans/i'),
    ).toBeVisible();
  });
 
  
});