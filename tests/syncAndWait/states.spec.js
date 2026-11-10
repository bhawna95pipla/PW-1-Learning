import{test,expect} from '@playwright/test';

test('Different Stated', async({page}) => {
  
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


test('Attached & Detached State', async({page}) => {

    await page.goto("https://playwrightlab.github.io/");

    await page.getByRole('button', {name : 'Add Element'}).click();

    const newElement = page.getByText('Dynamic Element #1');
    await newElement.waitFor({state: 'attached'});

    await page.getByRole('button', {name : 'Remove Element'}).click();
    await newElement.waitFor({state : 'detached'});
});


test('Hidden & Visible State', async({page}) => {

    await page.goto("https://www.playwrightautomation.com/practice");

    const target = await page.getByPlaceholder("I disappear when you click Hide");

    await page.getByRole('button', {name: 'Hide Element'}).click();
    await target.waitFor({state: 'hidden'});

    await page.getByRole('button', {name: 'Show Element'}).click();
    await target.waitFor({state: 'visible'});
});


test.only('Stable State', async({page}) => {

    await page.goto("http://www.uitestingplayground.com/animation");

    await page.getByRole('button', {name: 'Start Animation'}).click();

    const movingButton = await page.getByRole('button', {name: 'Moving target'});

    //await movingButton.waitFor({state : 'stable'});  state: 'stable' is not a valid option inside the locator.waitFor() method.
    await movingButton.click();
});

