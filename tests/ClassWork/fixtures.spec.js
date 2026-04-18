import {test} from "@playwright/test";
// test("Sample test", async({page}) => {
//     await page.goto("https://www.google.com");
// });

test("Sample test", async({browserName,page}) => {
    // let context = await browser.newContext();
    // const page1 = await context.newPage();
    await page.goto();
    console.log(browserName);

    // const page2 = await context.newPage();
    // await page2.goto("https://www.amazon.com");

});

