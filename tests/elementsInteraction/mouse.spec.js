import{test,expect} from '@playwright/test'


test('Mouse Hover', async({page}) => {
 
await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.locator("[class*='dropbtn']").hover();
await page.locator("//a[text()='Laptops']").hover();

});


test('Mouse Left', async({page})=> {

await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo/trigger-left-click.html");

await page.locator("//span[text()='left click me']").click({button: 'left'});
await expect(await page.locator("[class*='edit']")).toBeEnabled();
await page.locator("[class*='edit']").click();

});


test('Mouse Right', async({page})=> {

await page.goto("https://demoqa.com/buttons");

await page.locator("button[id*='right']").click({button: 'right'});
await expect(await page.locator("p[id*='right']")).toBeVisible();

});


test('Mouse Double Click', async({page})=> {

await page.goto("https://demoqa.com/buttons");

await page.locator("button[id*='double']").dblclick();
await expect(await page.locator("p[id*='double']")).toBeVisible();

});


test('Mouse Drag & Drop Method1', async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

await page.locator("#draggable").dragTo(await page.locator("#droppable"));

});


test.only('Mouse Drag & Drop Method2', async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

const source= await page.locator("#draggable");
const target= await page.locator("#droppable");

await source.hover();
await page.mouse.down();

await target.hover();
await page.mouse.up();

});

// dimension 