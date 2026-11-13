import{test,expect} from '@playwright/test';

test('Listen for console messages', async({page}) => {

    page.on('console', (message) => {
        console.log("Console :", message.text());
    });

    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link', {name: 'A/B testing'}).click();
});


test('Listen for Alert Dilaog', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain("alert");
await expect(dialog.message()).toContain("I am an alert box!");
await dialog.accept();
});
await page.click("[id*='alert']");
});


test('Listen for Page Error', async ({page}) => {

page.on('pageerror', (error) => {
    console.log("Page Error :", error.message);    
});
await page.goto("https://the-internet.herokuapp.com/");
await page.getByRole('link', {name: 'JavaScript onload event error'}).click();
});


test('Listen for Network Request', async({page}) => {
 page.on('request', (request) => {
    console.log("Netwrok Request: ", request.url());
 });

  await page.goto('https://the-internet.herokuapp.com/');
});


test('Popup Window', async({page}) => {

    page.on('popup', async(popup) => {
     console.log('New popup opened!');
     await popup.waitForLoadState();
     console.log('Popup URL:', popup.url());
     console.log('Popup Title:', await popup.title());

    });

    await page.goto('https://the-internet.herokuapp.com/windows');
    await page.getByText("Click Here").click();
});



test.only('Close event', async({page}) => {

 page.on('close', () => {
     console.log('Page has been closed!');
    });

    await page.goto('https://the-internet.herokuapp.com/');
    console.log('Website opened successfully');
    await page.close();
});