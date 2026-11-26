import{test} from './customFixture.spec.js';
import{expect} from '@playwright/test';

test('Home page', async ({loginPage}) => {

    await expect(loginPage).toHaveTitle("Swag Labs");
    await expect(loginPage.locator(".title")).toBeVisible();

});