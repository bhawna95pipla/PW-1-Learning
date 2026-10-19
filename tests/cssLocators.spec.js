import{test,expect,chromium} from '@playwright/test';

test('Login Test with CSS using locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("[type='password']").fill ("secret_sauce");
    await page.locator("[class*='submit']").click();

    const cart= await page.locator("[id*='shopping_cart']");
    await expect(cart).toBeVisible;
});


test('Login Test with CSS using direct methods', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name","standard_user");
    await page.fill("[type='password']","secret_sauce");
    await page.click("[class*='submit']");

    const cart= await page.locator("[id*='shopping_cart']");
    await expect(cart).toBeVisible;

    const inventoryList= await page.locator(".inventory_list div")
    console.log(await inventoryList.allTextContents());
});


test.only('CSS locators', async({page}) => {
    await page.goto("https://www.ourgoalplan.co.in/Login.aspx");

    await page.locator("#txtName").fill("bhawnap");
    await page.fill("[placeholder='Password']", "Pipla1995");
    await page.click("[value='Login']");

    const loggedUser = await page.locator("[id$='User']");
    await expect(loggedUser).toBeVisible();
});



