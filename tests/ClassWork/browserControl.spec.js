import {chromium, test} from '@playwright/test';
import { log } from 'node:console';

// test("Browser control", async({page}) => {
//     await page.goto("https://www.google.com");
//     let size = await page.viewportSize()
//     console.log(size);
// });

test("Browser control 2", async({browser}) => {
    browser = await chromium.launch();
    let context = await browser.newContext();
    let page1 = await context.newPage();
    await page1.goto("https://google.com");
    // let cookies = await context.cookies();
    // console.log(cookies);
    // console.log("Page 1 title: " + await page1.title());
    await page1.screenshot({path: "screenshot/google.png"});
});

