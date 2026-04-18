import {test} from '@playwright/test';

test("fetch run", async({page}) => {
    await page.goto("https://www.cricbuzz.com/");
    await page.locator('//a[@title="Live Cricket Score"]').click();
    await page.locator('(//span[@class="text-cbComplete"])[2]').click();
    let run = await page.locator('//a[@title="View Highlights of Gede Arta"]/preceding-sibling::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"]').nth(1).textContent();
    console.log(run);
});