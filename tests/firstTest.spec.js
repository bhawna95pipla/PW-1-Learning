const {test,expect}= require('@playwright/test');


test('Page Title check', async ({page}) => {
await page.goto('https://www.ourgoalplan.co.in/Login.aspx');
await expect(page).toHaveTitle(/Login/);

});
