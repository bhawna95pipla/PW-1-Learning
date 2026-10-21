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

    //and :Both conditions must be true for the element to match.
    await page.locator("//input[@id='user-name' and @placeholder='Username']");

    //or : Either condition can be true for the element to match.
    await page.locator("//input[@placeholder='Username' or @placeholder='Password']");

    //Parent axis — parent:: Find the parent of the username input:
    await page.locator("//input[@id='user-name']/parent::*");

    // Child axis — child:: Find all direct child elements of the login form:
    await page.locator("//*[@class='inventory_container']/child::*");

    //ancestor : Select parents and higher ancestors
    await page.locator("//input[@id='user-name']/ancestor::form");

    // descendant:: Select all descendants
    await page.locator("//*[@id='inventory_container']/descendant::div");

    //following:: Select later elements in document order, excluding descendants
    await page.locator("//input[@id='user-name']/following::input");

    //preceding:: Select earlier elements in document order, excluding ancestors
    await page.locator("//input[@id='password']/preceding::input");

    //contains : searched for partial text
    await page.locator("//h4[contains(text(),'Accepted')]");

    //normalize-space() to remove leading and trailing whitespace and collapse consecutive spaces into a single space before matching text.
    await page.locator("//*[normalize-space()='Swag Labs']");

    //indexing 
    await page.locator("(//input)[1]");
    await page.locator("(//form//div)[2]");

    //starts-with() function locates an element whose attribute value begins with specified text.
    await page.locator("//input[starts-with(@class,'submit')]");
});


test.only('Login Page with Xpath', async({page}) => {

    await page.goto("https://www.ourgoalplan.co.in/Login.aspx");

    await page.fill("//input[@placeholder='Username']", "bhawnap");
    await page.fill("//*[@id='txtPassword']", "Pipla1995");
    await page.click("//*[@value='Login']");

    await expect(page.locator("//span[text()='Goal Sheet of Bhawna Pipla']")).toBeVisible();

});