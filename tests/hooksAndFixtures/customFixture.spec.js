const {test: base, expect}= require('@playwright/test');

const test = base.extend({

    loginPage: async({page}, use) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("input[id*='login']").click();

    await use(page);

    console.log("Test executed");
    
    }

});

module.exports= {test, expect};