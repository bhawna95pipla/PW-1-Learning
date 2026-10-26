import{test,expect} from '@playwright/test';



test('Login Test with xpath locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@name='password']").fill ("secret_sauce");
    await page.locator("//input[@type='submit']").click();

    await expect(page.locator("//div[@class='app_logo']")).toBeVisible();
    await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();

    await page.locator("//span[text()='Products']").click();
    
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@href='#']").allTextContents();
    
});


test('Relationship & Text Xpath locators', async({page}) => {
await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name' and @placeholder='Username']");

    await page.locator("//input[@placeholder='Username' or @placeholder='Password']");

    await page.locator("//input[@id='user-name']/parent::*");

    await page.locator("//*[@class='inventory_container']/child::*");

    await page.locator("//input[@id='user-name']/ancestor::form");

    await page.locator("//*[@id='inventory_container']/descendant::div");

    await page.locator("//input[@id='user-name']/following::input");

    await page.locator("//input[@id='password']/preceding::input");

    await page.locator("//h4[contains(text(),'Accepted')]");

    await page.locator("//*[normalize-space()='Swag Labs']");

    await page.locator("(//input)[1]");
    await page.locator("(//form//div)[2]");

    await page.locator("//input[starts-with(@class,'submit')]");
});


test.only('Login Page with Xpath', async({page}) => {

    await page.goto("https://www.ourgoalplan.co.in/Login.aspx");

    await page.fill("//input[@placeholder='Username']", "bhawnap");
    await page.fill("//*[@id='txtPassword']", "Pipla1995");
    await page.click("//*[@value='Login']");

    await expect(page.locator("//span[text()='Goal Sheet of Bhawna Pipla']")).toBeVisible();

});