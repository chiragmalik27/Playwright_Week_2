import {test} from '@playwright/test';

// test("Mobile", async({page}) => {
//     await page.goto("https://www.amazon.in");
//     await page.locator("input#twotabsearchtextbox").fill("Mobiles");
//     await page.locator("input#nav-search-submit-button").click();
//     await page.locator("//li[@id='p_n_g-1003517064111/51258698031']/descendant::i[@class='a-icon a-icon-checkbox']").check();
//     await page.screenshot({path: "screenshot/Amazon1.png"});
// });


// test("Mobile", async({page}) => {
//     await page.goto("https://www.amazon.in");
//     await page.locator("input#twotabsearchtextbox").fill("shoes");
//     await page.locator("input#nav-search-submit-button").click();
//     await page.locator("(//span[@class='a-price-whole'])[4]/ancestor::div[@class='a-section a-spacing-none a-spacing-top-small s-price-instructions-style']/../descendant::h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']").click();

// });


// test("Mobile", async({page}) => {
//     await page.goto("https://www.amazon.in");
//     await page.locator("input#twotabsearchtextbox").fill("shoes");
//     await page.locator("input#nav-search-submit-button").click();
//     await page.waitForTimeout(5000);
//     let element = await page.locator('(//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"])[1] | (//span[@class="a-price-whole"])[4]').allTextContents();

//     console.log(element);
// });

test("Mobile", async({page}) => {
    await page.goto("https://www.amazon.in");
    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles");
    await page.getByAltText("Figurines, vases & more").click();
    await page.getByTestId("quad-multi-asin-card-v2_desktop-gateway-atf_2")
    await page.getByRole()

});