import{test,expect,chromium} from '@playwright/test';


test.only('All CSS locators', async({page}) => {
    await page.goto("https://www.demoblaze.com/");

    await page.locator("#login2").click();

    await page.fill("input[id*='loginuser']", "@ab@");
    await page.fill("#loginpassword", "@ab@");
    await page.click("[onclick^=logIn]");

    await expect(page.locator("[id$='user']")).toBeVisible();
    console.log(await page.locator("a[class*='list']").allTextContents());

    await page.locator(".container p");
    await page.locator("#contcont > div");
    await page.locator("#tbodyid > div");

    await page.locator("[id='cat'] + a");
    await page.locator("nav [type='button'] ~ div");

    await page.locator("a:not([href='#'])");  

});



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


test('CSS locators', async({page}) => {
    await page.goto("https://www.ourgoalplan.co.in/Login.aspx");

    await page.locator("#txtName").fill("bhawnap");
    await page.fill("[placeholder='Password']", "Pipla1995");
    await page.click("[value='Login']");

    const loggedUser = await page.locator("[id$='User']");
    await expect(loggedUser).toBeVisible();
});



