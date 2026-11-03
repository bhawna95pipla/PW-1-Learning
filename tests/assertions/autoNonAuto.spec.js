import {test,expect} from '@playwright/test';

test('Auto Retrying Assertions', async({page}) => {
 
    await page.goto("https://demoqa.com/automation-practice-form");

    await expect(page.locator("img[src*='assets']")).toBeVisible();

    await expect(page.locator("#firstName")).toBeEnabled();
    await expect.soft(page.locator("#firstName")).toBeDisabled();
    await expect.soft(page.locator("#firstName")).toBeHidden();

    await expect(page.locator("#submit")).toHaveAttribute('type','submit');

    await expect(page.locator(".text-center")).toHaveText("Practice Form");

    const userEmail = await page.locator("#userEmail");
    await userEmail.fill("abc@gmail.com");
    await expect(userEmail).toHaveValue("abc@gmail.com");

    await page.locator("#dateOfBirthInput").click();
    const months= await page.locator("[class*='month-select'] option");
    await expect(months).toHaveCount(12);
});


test('Non-Auto Retryign assertions', async({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator("#firstName").fill("Bhawna");
    await page.locator('#userEmail').fill('abcd@gmail.com');

    const visible = await page.locator('#firstName').isVisible();
    await expect(visible).toBe(true);

    const email = await page.locator("#userEmail").inputValue();
    await expect(email).toBeTruthy();

    const firstName = await page.locator('#firstName').inputValue();
    await expect(firstName).toBe("Bhawna");

    await expect(firstName).toHaveLength(6);
    await expect(firstName).toContain("Bha");
    await expect(firstName).toBeDefined();
});
