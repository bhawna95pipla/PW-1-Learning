import{test,expect} from '@playwright/test';

test('test1@sanity', async({page}) => {

    console.log("Test 1......");
});


test('test2@sanity', async({page}) => {

    console.log("Test 2......");
});


test('test3@reg', async({page}) => {

    console.log("Test 3......");
});


test('test4@reg', async({page}) => {

    console.log("Test 4......");
});


test('test5@sanity@reg', async({page}) => {

    console.log("Test 5......");
});


test('Test 6', {tag : '@user'}, async({page}) => {

    page.goto("https://demoqa.com/login");
    await expect(page.locator("label[id*='userName']")).toBeVisible();
    console.log("Test 6.....")
});


test('Test 7', {tag: '@password'}, async({page}) => {

    page.goto("https://demoqa.com/login");
    await expect(page.locator("label[id*='password']")).toBeVisible();
    console.log("Test 7......");   
});

test('Test 8', {tag: ['@user, @password']}, async({page}) => {

    page.goto("https://demoqa.com/login");
    await expect(page.getByRole('button', {name : 'New User'})).toBeVisible();
    console.log("Test 8.....");
});


test.describe('Login page', {tag : '@login'}, () => {

test('Test 9', async({page}) => {

    console.log("Test 9......");
});

test('Test 10', async({page}) => {

    console.log("Test 10......");
});

});
