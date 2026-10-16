import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search Amazon.in' })).toBeEmpty();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
});