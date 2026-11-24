import{test, expect, chromium} from '@playwright/test';

test('Handle Pages/Windows', async({}) => {

const browser = await chromium.launch();
const context = await browser.newContext();

const page1= await context.newPage();
const page2= await context.newPage();
const allPages = context.pages();
console.log("N0. of Pages/Windows :", allPages.length);

await page1.goto("https://practicetestautomation.com/practice/");
await expect(page1).toHaveTitle("Practice | Practice Test Automation");

await page2.goto("https://practicetestautomation.com/practice-test-login/");
await expect(page2).toHaveTitle("Test Login | Practice Test Automation");
});


test.only('Handle Multiple Pages/Windows', async({}) => {

const browser = await chromium.launch();
const context = await browser.newContext();

const page1= await context.newPage();
await page1.goto("https://testautomationpractice.blogspot.com/");
await expect(page1).toHaveTitle("Automation Testing Practice");

const pagePromise = context.waitForEvent('page');
await page1.locator("[href*='istock']").click();

const page2 = await pagePromise;
await expect(page2).toHaveTitle("merrymoonmary Stock Image and Video Portfolio - iStock");

await browser.close();
});
// bring to function