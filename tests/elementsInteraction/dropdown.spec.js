import{test,expect} from '@playwright/test';

test('Dropdown Handle different Methods', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#country").selectOption({label: 'China'});

await page.locator("#country").selectOption('Japan');

await page.locator("#country").selectOption({value: 'usa'});

await page.locator("#country").selectOption({index: 4});

await page.selectOption("#country",'Germany');

});


test('DropDown Assertions', async({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  //Check no of options in Dropdown list
  await expect(await page.locator("#country option")).toHaveCount(10);

  const options = await page.$$("#country option");
  console.log(options.length);
  await expect(options.length).toBe(10);

  //Check particular option present in dropdown list
  const content = await page.locator("#country").textContent();
  await expect(content.includes("India")).toBeTruthy();
   
  let status= false;
  for(const option of options){
    let value = await option.textContent();
    if(value.includes("Japan")){
        status = true;
        break;
    }
  }
  await expect(status).toBeTruthy();
  
});


test('Select dropdown value using loop', async({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const options = await page.$$("#country option");

  for(const option of options){
    let value = await option.textContent();
    if(value.includes("Japan")){
        await page.selectOption("#country", value);
        break;
    }
  }

});



test('MutliSelect Dropdown', async({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.selectOption("#colors", ['Red', 'Blue', 'Yellow']);

  await expect(await page.locator("#colors option")).toHaveCount(7);

  const options = await page.$$("#colors option");
  console.log(options.length);
  await expect(options.length).toBe(7);
  
const content = await page.locator("#colors").textContent();
await expect(content.includes("Blue")).toBeTruthy();

await expect(content.includes("Purple")).toBeFalsy();
  
});


test('Bootstrap Dropdown', async({page}) => {

  await page.goto("https://qaplayground.com/practice/dropdowns");

  await page.locator("[id*='fruit']").click();

  const listOptions = await page.locator("[id*='fruit'] option");
  await expect(listOptions).toHaveCount(4);

 const options = await page.$$("[id*='fruit']");
 for(let option of options)
 {
  const value = await option.textContent();
  if(value.includes("Apple")){
    await option.click();
    break;
  }
 }

});



test.only('Auto-suggest Dropdown', async({page}) => {

  await page.goto("https://www.makemytrip.com/", { waitUntil : 'domcontentloaded'});

  await page.locator("span[class*='close']").click();
  await page.locator("[placeholder='From']").fill("Delhi");
  await page.waitForSelector("li[role='option'] span");

  const fromCity = await page.$$("li[role='option'] span");

  for(let option of fromCity){
    const value= await option.textContent();
    console.log(value);
    
  }
});




