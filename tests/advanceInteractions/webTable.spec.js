import {test,expect} from '@playwright/test';

test('Table Handling', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const table = await page.locator("#productTable");

    const columns = await table.locator("th");
    console.log("No.of Columns :", await columns.count());
    expect(await columns.count()).toBe(4);
 
    const rows = await table.locator("tbody tr");
    console.log("No.of Rows :", await rows.count());
    expect(await rows.count()).toBe(5);

    const singleRow = rows.filter({ has : page.locator("td"), hasText :'Tablet'});
    await singleRow.locator("input").check();

    await multipleProducts(rows, page,'Smartphone');
    await multipleProducts(rows, page,'Smartwatch');

    //all Product details
    for(let i=0; i<await rows.count(); i++){
         const row = rows.nth(i)
         const rowColumn = row.locator("td");

    for(let j=0 ; j<await rowColumn.count()-1; j++){
      
        console.log(await rowColumn.nth(j).textContent());
    }};
});

async function multipleProducts(rows,page,name){

   const multipleRow = rows.filter({ has : page.locator("td"), hasText :name});
    await multipleRow.locator("input").check();

};


test('Pagination', async({page}) => {
 
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const table = await page.locator("#productTable");

    const columns = await table.locator("th");
    console.log("No.of Columns :", await columns.count());
 
    const rows = await table.locator("tbody tr");
    console.log("No.of Rows :", await rows.count());

    const pages= await page.locator(".pagination li a");
    console.log("No.of Tables :", await pages.count());

    for(let p=0 ; p<await pages.count(); p++){

        if(p>0){
            await pages.nth(p).click();
        }
    for(let i=0; i<await rows.count(); i++){
         const row = rows.nth(i)
         const rowColumn = row.locator("td");

    for(let j=0 ; j<await rowColumn.count()-1; j++){
      
        console.log(await rowColumn.nth(j).textContent());
    }}};
        
});