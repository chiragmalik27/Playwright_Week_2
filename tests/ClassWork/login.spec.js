import {test, expect} from '@playwright/test';

// test("Login", async({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/");
//     await page.locator('input#username').fill("student");
//     await page.locator('input#password').fill("Password123");
//     await page.locator('button#submit').click();
//     await page.locator('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click();
// });

// test("Register", async({page}) => {
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
//     await expect(page.getByText('Name')).toBeVisible();
//     await page.getByPlaceholder('Enter Your Name').click();
//     await page.keyboard.type('Chirag Malik');
//     await page.keyboard.down('Tab');
//     await page.keyboard.up('Tab');
//     await page.keyboard.insertText('chiragmalik@gmail.com');
//     await page.keyboard.press('Control+A');
//     await page.keyboard.press('Control+C');
//     await page.keyboard.down('Tab');
//     await page.keyboard.up('Tab');
//     await page.keyboard.press('Control+V');
//     await page.mouse.click(100, 100, {button: "right"});
//     // await page.locator('#email').fill("chiragmalik@gmail.com");
//     // await page.locator('#password').fill("Password123");
//     // await page.locator('button[type="submit"]').click();
// });

// test("Register", async({page}) => {
//     await page.goto("https://www.saucedemo.com/");
//     await page.getByTestId("username").fill("standard_user");
// });

// test("Counter", async({page}) => {
//     await page.goto("https://www.rapidtables.com/tools/click-counter.html?c1=0")
//     await page.locator('//button[@id="addbtn"]').click({clickCount: 2});
// });



// test('sample login test', async ({page}) => { 
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     // await page.getByText('Username').fill('student');
//     await page.locator('//input[@id="username"]').click();
//     await page.keyboard.insertText('student');
// await page.waitForTimeout(50000);
//     await page.locator('//input[@id="password"]').fill('Password123');
//     await page.pause();
//     await page.locator('//button[@id="submit"]').click();
// });

// test.only('page_handling', async ({browser}) => {
//     let context = await browser.newContext();
//     let page = await context.newPage();
//     await page.goto('https://www.amazon.in/');
//     await page.getByPlaceholder("Search Amazon.in", {exact: true}).fill('mobiles');
//     await page.keyboard.press('Enter');
//     let [page2] = await Promise.all([page.waitForEvent('popup'),page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').first().click()]);
   
//     await page2.locator('//input[@id="buy-now-button"]').click();
// });

// test.only('page_handling', async ({browser}) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=a');

//     const [tab1, tab2, tab3] = await Promise.all([
//         page.waitForEvent('popup'),
//         page.waitForEvent('popup'),
//         page.waitForEvent('popup'),
//         page.getByRole('button', {name: 'Shop Now'}).click(),
//         page.getByRole('button', {name: 'Shop Now'}),
//         page.getByRole('button', {name: 'Shop Now'})
//     ]);

    
//      await tab1.getByRole('button', {name: 'Add to Cart'}).click();
//     await tab2.getByRole('button', {name: 'Add to Cart'}).click();
//     await tab3.getByRole('button', {name: 'Add to Cart'}).click();
    
// });

// test('login', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('[id="user-name"]').fill('standard_user');
//     await page.locator('#password').fill('secret_sauce');
//     await page.locator('[type="submit"]').click();
    
// })

// test('fetch price', async({page}) => {
//     await page.goto('https://www.flipkart.com/')
//     await page.locator('.b3wTlE').click();
//     await page.locator('[name="q"]').first().fill("phones");
//     await page.keyboard.press('Enter');
//     let price = await page.locator('[class="col col-5-12 mao5dl"]').first().textContent();
//     console.log(price);
// });

// test('zepto', async({page}) => {
//     await page.goto('https://www.zepto.com/')
//     await page.locator('(//button[@class="__8pvtm nLA5R"])[2]').click()
//     await page.locator('//div[@class="cQAjo6 ch5GgP"]/span[text()="Protinex Hot Chocolate"]').click();
//     const price = await page.locator('//div[@class="u-flex WwbTC xs2VX"]/parent::div[@class="u-flex __9xEzL vLGPf u-flex u-flex-row"]').textContent()
//     console.log(price);
// })

test('blinkit', async({page}) => {
    await page.goto('https://blinkit.com/');
    await page.locator('//input[@class="LocationSearchBox__InputSelect-sc-1k8u6a6-0 fZCGlI"]').fill("chandigarh university")
    await page.locator('//div[@class="LocationSearchList__LocationDetailContainer-sc-93rfr7-1 bBiSUM"]/child::div[text()="Ludhiana - Chandigarh National Highway, Chandigarh State, Punjab, India"]').click();
    await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[104]').click();
    await page.waitForTimeout(2000);
    await page.locator('(//div[@class="AddToCart__UpdatedButtonContainer-sc-17ig0e3-0 lmopxc"])[4]').click(); 
    const price = await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[2]').textContent()

    console.log(price);

})