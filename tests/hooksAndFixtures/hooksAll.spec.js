import{test, expect} from '@playwright/test';

let page;

test.beforeAll(async ({browser}) => {
 
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("input[id*='login']").click();
});

test.afterAll(async() => {
 
    await page.locator("button[id*='menu']").click();
    await page.getByRole('button', {name: 'Logout'}).click();
});

test('Home Page', async() => {

    const products= await page.$$(".inventory_item");
    await expect(products).toHaveLength(6);
});


test('Add Product to Cart', async() => {

    await page.getByAltText("Sauce Labs Backpack").click();
    await page.locator("button[id*='cart']").click();
    await expect(page.locator("#remove")).toBeVisible();
});


