import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  await expect(page.locator('h1')).toContainText('"mobile"');

  await page.locator('#a-autoid-3').getByRole('button', { name: 'Add to cart' }).click();
 
});