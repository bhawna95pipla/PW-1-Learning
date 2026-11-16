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


