import { test, chromium } from '@playwright/test';

test('Test Browsers',async () =>{
const browser = await chromium.launch({headless : false});

const page = await browser.newPage();

await page.goto("https://www.amazon.in/");
await browser.close();
});


test('Test Contexts & Pages',async () =>{
const browser = await chromium.launch();

const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto("https://www.google.com");


const context2 = await browser.newContext();
const page2 = await context2.newPage();
await page2.goto("https://www.ourgoalplan.co.in/GoalSheet.aspx");


await browser.close();
});


test('Test viewporting',async () =>{
const browser = await chromium.launch();

const context = await browser.newContext({
    viewport : {
        width  : 1080,
        height : 480
    }
});
const page = await context.newPage();
await page.setViewportSize({
    width  : 1080,
    height : 720
});

await page.goto("https://www.google.com");
await browser.close();
});


test.only('Browser maximize', async () => {
  const browser = await chromium.launch({
    args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: null,
  });

  const page = await context.newPage();

  await page.goto('https://www.google.com');

  await browser.close();
});












