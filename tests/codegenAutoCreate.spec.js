import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/');
  await page.locator('.commonModal__close').click();
  await expect(page.locator('a').first()).toBeVisible();
  await page.getByRole('link', { name: 'Trains' }).click();
  await page.getByRole('textbox', { name: 'To CNB, Kanpur Central' }).click();
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByRole('gridcell', { name: 'Sat Oct 17' }).click();
  await page.locator('.hsBackDrop').click();
});