import{test,expect} from '@playwright/test';


test('Get by Role', async({page}) => {

await page.goto("https://www.saucedemo.com/");

await page.getByPlaceholder("Username").fill("standard_user");
await page.getByPlaceholder("Password").fill("secret_sauce");

await expect(page.getByRole('button',{name : 'Login'})).toBeVisible;
await expect(page.locator("#login-button")).toBeEnabled();
//await expect(page.locator("#login-button")).toBeDisabled();

await page.getByRole("button", { name: "Login" }).click();

console.log(await page.getByRole("button", {name: "Add to cart"}).count());

    
});

/*
test('Get by label', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByLabel('Email');
});
*/

test('Get by placeholder', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    const user = await page.getByPlaceholder('Username')
    await user.fill("standard_user");
    console.log(await user.inputValue());

    await expect(user).toHaveValue("standard_user");

    console.log(await user.getAttribute("placeholder"));
    console.log(await user.getAttribute("name"));


});


test('Get by text', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    console.log(await page.getByText('Swag Labs', {exact :true}).textContent());
});


test.only('Get by TestId', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByTestId('login-button');

    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@name='password']").fill ("secret_sauce");
    await page.locator("//input[@type='submit']").click();

    
    const items = await page.getByTestId("inventory-item-name");
    // await items.first().waitFor({ state: 'visible' });
    console.log(await items.allTextContents());

});

test('Get by locator', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");

});


test('Get by AltText', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByAltText("Sauce Labs Backpack");
});

test('Get by Title', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByAltText("Sauce Labs Backpack");
});