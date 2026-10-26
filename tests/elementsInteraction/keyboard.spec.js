import {test,expect} from '@playwright/test';

test('Keyboard Actions', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.fill("#email", "abcd");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");

    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    await page.keyboard.press("Control+V");
    await expect(await page.locator("[name='password']")).toHaveValue("abcd");

});