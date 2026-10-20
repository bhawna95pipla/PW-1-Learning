import{test,expect} from '@playwright/test';



test('Login Test with xpath locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.pause();

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@name='password']").fill ("secret_sauce");
    await page.locator("//input[@type='submit']").click();

    await expect(page.locator("//div[@class='app_logo']")).toBeVisible();
    await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();

    await page.locator("//span[text()='Products']").click();
    
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@href='#']").allTextContents();
    
});