import{test,expect} from '@playwright/test';

test.only('Different Stated', async({page}) => {
  
    await page.goto("https://www.saucedemo.com/");

    const loginButton= await page.getByRole('button', {name : 'Login'});
    
    await expect(loginButton).toBeVisible();
    await expect(loginButton).not.toBeHidden();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).not.toBeDisabled();

    const username= await page.locator("#user-name");
    await expect(username).toBeEditable();
    await expect(username).toBeEmpty();
    await username.focus();
    await username.fill("standard_user");
});


test('Checked - UnChecked State', async({page}) => {
  
    await page.goto("https://qaautomationlabs.com/testing/checkbox.php");

    await page.check("#myCheckbox");
    await expect(page.locator("#myCheckbox")).toBeChecked();

    await page.uncheck("#myCheckbox");
    await expect(page.locator("#myCheckbox")).not.toBeChecked();
});


