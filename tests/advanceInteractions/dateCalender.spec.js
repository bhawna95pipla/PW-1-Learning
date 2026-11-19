import {test,expect} from '@playwright/test';

test('Date by Fill',async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("#datepicker", "11/30/2026");
});


test('Future Date by Date Picker ',async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const year = "2027";
    const month= "February";
    const date = "4";

   await page.click("#datepicker");

   while(true){

    const selectedYear= await page.locator("[class*='year']").textContent();
    const selectedMonth = await page.locator("span[class*='month']").textContent();

    if(selectedYear == year && selectedMonth == month){
        break;
    }
    await page.locator("[title='Next']").click();
   }

   const dates= await page.$$("a[class*='state']");

   // Select date using loop
   for(const d of dates){
    if(await d.textContent() == date){
        await d.click();
        break;
    }
   }

   //Select date using xpath
   await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
});


test('Past Date by Date Picker ',async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const year = "2024";
    const month= "March";
    const date = "3";

   await page.click("#datepicker");

   while(true){

    const selectedYear= await page.locator("[class*='year']").textContent();
    const selectedMonth = await page.locator("span[class*='month']").textContent();

    if(selectedYear == year && selectedMonth == month){
        break;
    }
    await page.locator("[title='Prev']").click();
   }

   //Select date using xpath
   await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
});
