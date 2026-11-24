import{test, expect} from '@playwright/test';

test.describe.skip('Group1', async() => {

test('Test1', async({page}) => {

    page.goto("https://qaautomationlabs.com/testing/index.php");
    console.log("Test1.....");   
});

test('Test2', async({page}) => {
    console.log("Test2....."); 
});
});



test.describe('Group2', async() => {
test('Test3', async({page}) => {

    console.log("Test3....."); 
});


test('Test4', async({page}) => {

    page.goto("https://www.saucedemo.com/");
    console.log("Test4....."); 
});
});