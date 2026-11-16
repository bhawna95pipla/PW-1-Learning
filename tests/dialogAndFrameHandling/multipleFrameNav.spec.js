import {test,expect} from '@playwright/test';

test('Multiple Frame Navigation with FrameLocator', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames");

    const frameOne= page.frameLocator("[src*='frame_1']");
    await frameOne.locator("[name*='text1']").fill("Frame1 Hello");
    await expect(frameOne.locator("//div[text()='Frame1']")).toHaveText("Frame1");

    const frameTwo= page.frameLocator("[src*='frame_2']");
    await frameTwo.locator("[name*='text2']").fill("Frame2 morning");
    await expect(frameTwo.locator("//div[text()='Frame2']")).toHaveText("Frame2");
});


test('Multiple Frame Navigation with PageFrame', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames");

    const frameOne= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1'});
    await frameOne.fill("[name*='text1']","Frame1 Hello");
    await expect(frameOne.locator("//div[text()='Frame1']")).toHaveText("Frame1");

    const frameTwo= await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_2'});
    await frameTwo.fill("[name*='text2']","Frame2 Bye");
    await expect(frameTwo.locator("//div[text()='Frame2']")).toHaveText("Frame2");
});