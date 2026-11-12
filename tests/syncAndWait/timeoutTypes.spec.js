import {test, expect} from '@playwright/test';

test('Test Timeout for Single test', async({page}) => {

    test.setTimeout(6000);
 
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.fill("#username", "student");
    await page.fill("#password", "Password123");
    await page.getByRole('button', {name : 'Submit'}).click();

    await expect(page.locator(".post-title")).toBeVisible();
});

test('Action Timeout', async({page})=> {

await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator("#username").fill("student", {timeout : 2000});
    await page.locator("#password").fill("Password123", {timeout :3000});
    await page.getByRole('button', {name : 'Submit'}).click({timeout : 4000}); 
});


test('Navigation Timeout', async({page}) => {

    await page.goto("https://www.amazon.in/", {timeout : 10000});
});


test('Assertion Timeout', async({page}) => {

   await page.goto("https://practicetestautomation.com/practice-test-login/");

   await expect(page.locator("#username")).toBeVisible({timeout : 5000});
});