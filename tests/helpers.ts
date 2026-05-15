import { Page } from '@playwright/test';

/**
 * Dismiss the cookie consent banner if present.
 */
export async function acceptCookies(page: Page): Promise<void> {
  const cookieBtn = page.locator('text=Got it');
  try {
    await cookieBtn.waitFor({ state: 'visible', timeout: 4000 });
    await cookieBtn.click();
  } catch {
    // Banner already dismissed or not present
  }
}

/**
 * Navigate to a path and accept cookies in one call.
 */
export async function gotoAndAcceptCookies(
  page: Page,
  path: string = '/',
): Promise<void> {
  await page.goto(path);
  await acceptCookies(page);
}
