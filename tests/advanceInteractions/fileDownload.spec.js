import{test,expect} from '@playwright/test';
import fs from 'fs';

test('Verify Downloaded File', async({page}) => {

    await page.goto("https://practice.expandtesting.com/download");

    const downloadPromise = page.waitForEvent('download');
    await page.locator("[href*='Original']").click();

    const download = await downloadPromise;
    await expect(download.suggestedFilename()).toBe("1795431639829_Sample PDF Original.pdf");

    const filePath = 'downloads/1795431639829_Sample PDF Original.pdf';
    await download.saveAs(filePath);
    await expect(fs.existsSync(filePath)).toBeTruthy();

})