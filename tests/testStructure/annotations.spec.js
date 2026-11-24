import{test, expect, chromium} from '@playwright/test';


test.only('Test1', async({}) => {

    console.log("Test 1.....");
});


test.skip('Test2', async({}) => {

    console.log("Test 2.....");
});


test('Test3', async({page,browserName}) => {
  
    if(browserName === 'chromium'){
        test.skip(); 
        console.log("Test 3.....");
    }
});


test('Test4', async({}) => {
    test.fixme();
    console.log("Test 4.....");
});


test('Test5', async({}) => {

    test.fail();
    console.log("Test 5.....");
    expect(5).toBe(5);
});


test('Test6', async({}) => {

    test.fail();
    console.log("Test 5.....");
    expect(5).toBe(6);
});


test('Test7', async({page,browserName}) => {
  console.log("Test 7.....");
    if(browserName === 'chromium'){
        test.fail();   
    }
});


test('Test8', async({page}) => {
    test.slow();
    console.log("Test 8.....");
    await page.goto("https://qaautomationlabs.com/testing/index.php");
    
});


test.only('Test9', async({page}) => {
    test.setTimeout(6000);
    console.log("Test 8.....");
    await page.goto("https://qaautomationlabs.com/testing/index.php");  
});







