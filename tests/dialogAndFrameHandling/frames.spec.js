import{test, expect} from '@playwright/test';


test('Frames', async({page}) => {

 await page.goto("https://ui.vision/demo/webtest/frames/");

 const allFrames = await page.frames();
 console.log("Total Frames :", allFrames.length);

 //const frameOne= await page.frame("name");
 const frameTwo= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1'});
 await frameTwo.fill("[name='mytext1']", "Morning");

 const inputField = await page.frameLocator("[src*='frame_2']").locator("[name='mytext2']");
 await inputField.fill("Welcome");
});


test('Inner/nested Frames', async({page}) => {

   await page.goto("https://ui.vision/demo/webtest/frames/");

const frameThree= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3'});
await frameThree.locator("[name='mytext3']").fill("Bye bye");

const childFrames = await frameThree.childFrames();
await childFrames[0].locator("//span[text()='Next']").click();
});