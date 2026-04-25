import {test, expect} from '@playwright/test'
import excel from 'exceljs'

test('flipkart', async({page, context}) => {
    const book = new excel.Workbook();
    await page.goto('https://www.flipkart.com/')
    await page.locator('.b3wTlE').click()
    await page.locator('(//div[@class="css-g5y9jx r-1awozwy r-1xfd6ze r-1a8msfu r-1777fci r-xyw6el r-usgzl9 r-10ou38a"])[6]').click()
    await page.locator('//picture/child::img[@src="https://rukminim2.flixcart.com/fk-p-flap/380/540/image/0a4cb0c0d40a1190.jpg?q=90"]').click()
    await page.waitForTimeout(3000)
    
    await page.locator('(//input[@class="UXWKAE"]/following-sibling::div[@class="ybaCDx"])[1]').click()
    await page.locator('//div[text()="Price -- Low to High"]').click()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//div[@class="RGLWAk"]/child::a[@class="pIpigb"])[5]').click()

    ]);

    await newPage.waitForLoadState();
    await expect(newPage.locator('//div[@class="css-g5y9jx"]/h1')).toBeVisible();
    let title = await newPage.locator('//div[@class="css-g5y9jx"]/h1').innerText()
    let price = await newPage.locator('//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]').innerText()

    await expect(title).toBeTruthy();
    await expect(price).toBeTruthy();
    console.log(title + ' ' + price)

    let sheet = book.getWorksheet("Sheet1");

    if (!sheet) {
        sheet = book.addWorksheet("Sheet1");
    }

    
    sheet.getRow(1).getCell(1).value = "Title";
    sheet.getRow(1).getCell(2).value = "Price";

    sheet.getRow(2).getCell(1).value = title;
    sheet.getRow(2).getCell(2).value = price;

    await book.xlsx.writeFile('C:/Users/ASUS/OneDrive/Desktop/Playwright/DDT/flipkart.xlsx'); 
})