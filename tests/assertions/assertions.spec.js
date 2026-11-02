import {test,expect} from '@playwright/test';

test('Built-In Assertions', async({page}) => {
 
    await page.goto("https://demoqa.com/automation-practice-form");

    await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");

    await expect(page).not.toHaveURL("https://www.saucedemo.com/");

    await expect(page).toHaveTitle("demosite");

    await expect(page).not.toHaveTitle("practice");

    await expect(page.locator("img[src*='assets']")).toBeVisible();

    await expect(page.locator("#firstName")).toBeEnabled();

    const maleRadioButton= await page.locator("[value='Male']");
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const sportsCheckBox= await page.locator("//label[text()='Sports']");
    await sportsCheckBox.click();
    await expect(sportsCheckBox).toBeChecked();

    await expect(page.locator("#submit")).toHaveAttribute('type','submit');

    await expect(page.locator(".text-center")).toHaveText("Practice Form");

    await expect(page.locator(".text-center")).toContainText("Form");

    const userEmail = await page.locator("#userEmail");
    await userEmail.fill("abc@gmail.com");
    await expect(userEmail).toHaveValue("abc@gmail.com");

    await page.locator("#dateOfBirthInput").click();
    const months= await page.locator("[class*='month-select'] option");
    await expect(months).toHaveCount(12);
});


test('Hard Assertions', async({page}) => {
 
    await page.goto("https://demoqa.com/automation-practice-form");

    await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");

    await expect(page).toHaveTitle("demosite");

    await expect(page.locator("#firstName")).toBeEnabled();
});


test.only('Soft Assertions', async({page}) => {
 
    await page.goto("https://demoqa.com/automation-practice-form");

    await expect.soft(page).toHaveURL("https://demoqa.com/automation-practice-form");

    await expect.soft(page).toHaveTitle("demosite12");

    await expect.soft(page.locator("#firstName")).toBeEnabled();
});