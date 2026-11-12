import {test, expect} from '@playwright/test';


test('Alert with OK', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain("alert");
await expect(dialog.message()).toContain("I am an alert box!");
await dialog.accept();
});

await page.click("[id*='alert']");
});


test('Confirmation Alert', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain("confirm");
await expect(dialog.message()).toContain("Press a button!");
await dialog.dismiss();
});

await page.click("//button[text()='Confirmation Alert']");
await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});


test('Prompt Alert', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain("prompt");
await expect(dialog.message()).toContain("Please enter your name:");
await expect(dialog.defaultValue()).toContain("Harry Potter");
await dialog.accept("Bhawna");
});

await page.click("[id*='prompt']");
await expect(page.locator("#demo")).toHaveText("Hello Bhawna! How are you today?");
});