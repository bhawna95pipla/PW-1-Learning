import {test,page} from '@playwright/test';

test('Indexing Mehtods to get specific element', async({page}) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name","standard_user");
    await page.fill("[type='password']","secret_sauce");
    await page.click("[class*='submit']");

    await page.getByRole('button', {name : 'Add to cart'}).first().click();

    await page.getByRole('button', {name : 'Add to cart'}).last().click();

    await page.getByRole('button', {name : 'Add to cart'}).nth(3).click();

    await page.getByTestId("inventory-item").filter({hasText : 'Sauce Labs Bike Light'});
});