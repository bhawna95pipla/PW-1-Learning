import{test, expect} from '@playwright/test';

test('Auto-Waiting', async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByRole('button', {name : 'Start'}).click();
});

test('Manual Wait', async({page}) => {
    await page.waitForTimeout(2000);
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByRole('button', {name : 'Start'}).click();
    await page.waitForTimeout(6000);
});


test('More Auto wait Actions', async({page}) => {
  
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.locator("#username").fill("Bhawna");

    await page.check("[value='standard']");
    await expect(page.locator("[value='standard']")).toBeChecked();

    await page.getByRole('button', {name: 'Point Me'}).hover();
});