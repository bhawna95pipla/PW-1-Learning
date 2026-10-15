import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await expect(page.getByText('"mobile"', { exact: true })).toBeVisible();
  await page.locator('#a-autoid-3').getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'item in cart' }).click();
  await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
});