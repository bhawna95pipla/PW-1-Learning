import {test,expect} from '@playwright/test';

test('Keyboard Actions', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.fill("[placeholder*='name']", "abcd");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");

    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    await page.keyboard.press("Control+V");
    await page.waitForTimeout(2000);

    await page.keyboard.down("Shift");
    await page.keyboard.type("xyz");
    await page.keyboard.up("Shift");
    

    await page.waitForTimeout(5000);
    //await expect(await page.locator("[name='password']")).toHaveValue("abcd");

});

//caps
