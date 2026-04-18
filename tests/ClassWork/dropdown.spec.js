import {test} from "@playwright/test";

test("dropdown" , async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('//select[@id="country_code"]').selectOption({value: "+92"})
})