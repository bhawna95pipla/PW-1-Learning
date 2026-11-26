import {test,expect} from '@playwright/test';

// test('Website Page', async ({ page }) => {

//     await page.goto('/');

// });


test.use({

    baseURL : 'http://www.uitestingplayground.com/'
});

test('Website Two Page', async ({ page }) => {

    await page.goto('/');
    await expect(page).toHaveTitle("UI Test Automation Playground");
});


test.describe('Desktop tests', () => {

    test.use({
        viewport: {
            width: 1280,
            height: 720
        }
    });

    test('Desktop homepage', async ({ page }) => {

        await page.goto('https://google.com');

    });

});