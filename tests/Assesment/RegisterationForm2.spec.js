import { test, expect } from '@playwright/test';

test("Reg Form 2", async({page}) => {
    await page.goto('https://vinothqaacademy.com/demo-site/')
    await expect(page).toHaveURL(/demo-site/);
    await page.locator('[id="vfb-5"]').fill("Chirag")
    await page.locator('[id="vfb-7"]').fill("Malik")
    await page.locator('//input[@value="Male"]').click()
    await page.locator('//input[@id="vfb-13-address"]').fill("Chandigarh University")
    await page.locator('//input[@id="vfb-13-city"]').fill("kharar")
    await page.locator('//input[@id="vfb-13-state"]').fill("Punjab")
    await page.locator('//input[@id="vfb-13-zip"]').fill("140301")
    await page.locator('(//span[@class="select2-selection select2-selection--single"])[1]').click()
    await page.locator('//input[@class="select2-search__field"]').fill('india')
    await page.keyboard.press('Enter')
    await page.locator('[id="vfb-14"]').fill('chiragmalik@gmail.com')
    await page.locator('(//span[@class="select2-selection select2-selection--single"])[2]').click()
    await page.locator('//input[@class="select2-search__field"]').fill("12")
    await page.keyboard.press('Enter')

    await page.locator('(//span[@class="select2-selection select2-selection--single"])[3]').click()
    await page.locator('//input[@class="select2-search__field"]').fill("30")
    await page.keyboard.press('Enter')

    await page.locator('//input[@id="vfb-19"]').fill("9501480672")
    await expect(page.locator('[id="vfb-5"]')).toHaveValue('Chirag');
    await expect(page.locator('[id="vfb-7"]')).toHaveValue('Malik');
    await expect(page.locator('//input[@value="Male"]')).toBeChecked();
    await expect(page.locator('[id="vfb-14"]')).toHaveValue('chiragmalik@gmail.com');
    await expect(page.locator('//input[@id="vfb-19"]')).toHaveValue('9501480672');
    await expect(page.locator('(//span[@class="select2-selection select2-selection--single"])[2]')).toContainText('12');
    await expect(page.locator('(//span[@class="select2-selection select2-selection--single"])[3]')).toContainText('30');
    await page.locator('//input[@id="vfb-3"]').fill("33")
    await page.waitForTimeout(2000)
    await page.locator('//input[@id="vfb-4"]').click()
    await page.screenshot({path : 'screenshot/Submit.png'})
    // await expect(page).toHaveScreenshot('Submit.png', { fullPage: true });
    



    

})