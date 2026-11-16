import {test,expect} from '@playwright/test';


test('Inner/nested Frames', async({page}) => {

   await page.goto("https://ui.vision/demo/webtest/frames/");

const frameThree= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3'});
await frameThree.locator("[name='mytext3']").fill("Bye bye");

const childFrames = await frameThree.childFrames();
await childFrames[0].locator("//span[text()='Next']").click();
});