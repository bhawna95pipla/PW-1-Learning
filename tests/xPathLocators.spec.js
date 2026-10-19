import{test,expect} from '@playwright/test';

test('Login Test with xpath locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@name='password']").fill ("secret_sauce");
    await page.locator("//input[@type='submit']").click();

    const cart= await page.locator("//a[@class='shopping_cart_link']");
    await expect(cart).toBeVisible;
});