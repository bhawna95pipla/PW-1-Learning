import{test} from '@playwright/test';

import{expect} from './custom.spec.js';

test('Custom Assertion', async({page}) => {
  
    await page.goto("https://demoqa.com/automation-practice-form");

    const firstName = page.locator("#firstName");
    await firstName.fill("Bhawna");
    await expect(firstName).toHaveEnteredText("Bhawna");

});