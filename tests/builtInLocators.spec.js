import{test,expect} from '@playwright/test';


test('Get by Role', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await expect(page.getByRole('button',{name : 'Login'})).toBeVisible;
});

/*
test('Get by label', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByLabel('Email');
});
*/

test('Get by placeholder', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username');
});


test('Get by text', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByText('Swag Labs');
});


test('Get by TestId', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByTestId('login-button');
});

test('Get by locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#login-button");
});


test('Get by AltText', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByAltText("Sauce Labs Backpack");
});

test('Get by Title', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByAltText("Sauce Labs Backpack");
});