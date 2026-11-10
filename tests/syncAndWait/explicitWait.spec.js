import {test, expect} from '@playwright/test';


test('Wait for Selector', async({page}) => {

    await page.goto("https://demoqa.com/dynamic-properties");

    await page.waitForSelector("#visibleAfter", {state : 'visible', timeout :10000});
    await expect(page.locator("#visibleAfter")).toBeVisible();
});


test('Wait for load State', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.locator("#login-button").click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test('Wait for URL', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");

    const url = page.waitForURL('**/inventory.html');

    await page.locator("#login-button").click();
    await url;
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test.only('Wait for Timeout', async({page}) => {

   await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", "standard_user");
    await page.waitForTimeout(2000);
    await page.fill("#password", "secret_sauce");
    await page.locator("#login-button").click();   
});