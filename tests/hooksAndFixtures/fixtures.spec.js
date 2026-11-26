import {test,expect, chromium} from '@playwright/test';

test('Page Fixture', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
});


test('Browser Fixture', async({browser}) => {

    const context = await browser.newContext();
    const page =  await context.newPage();
    
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");

    await context.close();
});


test('Context Fixture', async({browser}) => {

    const user1 = await browser.newContext();
    const user2 = await browser.newContext();

    const page1 = await user1.newPage();
    const page2 = await user2.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect(page1).toHaveTitle("Automation Testing Practice");
    
    await page2.goto("https://www.saucedemo.com/");
    await expect(page2).toHaveTitle("Swag Labs");

    await user1.close();
    await user2.close();
});


test('Request Fixture', async({request}) => {

   const response = await request.get("https://jsonplaceholder.typicode.com/users");
   console.log(response.status());  
});


