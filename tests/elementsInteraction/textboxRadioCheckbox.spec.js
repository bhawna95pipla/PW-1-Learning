import{test, expect} from '@playwright/test';

test('Handle Input fields', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await expect(page.locator("//input[@id='email']")).toBeVisible();
await expect(page.locator("//input[@id='email']")).toBeEmpty();
await expect(page.locator("//input[@id='email']")).toBeEditable();
await expect(page.locator("//input[@id='email']")).toBeEnabled();

await page.fill("//input[@id='email']", "abd@gmail.com");
});


test('Handle Radio Buttons', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.check("//input[@value='standard']");

await expect(await page.locator("//input[@value='standard']")).toBeChecked();
await expect(await page.locator("//input[@value='standard']").isChecked()).toBeTruthy();

await expect(await page.locator("//input[@value='express']").isChecked()).toBeFalsy();
});


test.only('Handle CheckBox', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.check("//input[@role='checkbox']");

await expect(await page.locator("//input[@role='checkbox']")).toBeChecked();
await expect(await page.locator("//input[@role='checkbox']").isChecked()).toBeTruthy();

await page.uncheck("//input[@role='checkbox']");
await expect(await page.locator("//input[@role='checkbox']").isChecked()).toBeFalsy();
});


