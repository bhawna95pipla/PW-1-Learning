import {test,expect} from '@playwright/test';

test('Upload Files', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.locator("#singleFileInput").click();
    await page.locator("#singleFileInput").setInputFiles("uploadTest/Image1.jpg");
    await page.locator("//button[text()='Upload Single File']").click();
    
});


test.only('Upload Multiple Files', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


    await page.locator("#multipleFilesInput").click();
    await page.locator("#multipleFilesInput").setInputFiles(["uploadTest/Image1.jpg",
                                       "uploadTest/Image2.jpg"]);
    await page.locator("//button[text()='Upload Multiple Files']").click();

});