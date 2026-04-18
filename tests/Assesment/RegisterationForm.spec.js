import {test,expect} from '@playwright/test'

test("Registeration" , async({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await expect(page).toHaveURL(/automation-practice-form/);
    await expect(page.getByText('Student Registration Form')).toBeVisible()
    await page.getByPlaceholder('First Name').fill("Chirag")
    await expect(page.getByPlaceholder('First Name')).toHaveValue('Chirag')
    await page.getByPlaceholder('Last Name').fill("Malik")
    await expect(page.getByPlaceholder('Last Name')).toHaveValue('Malik')
    await page.getByPlaceholder('name@example.com').fill("chiragmalik@gmail.com")
    await expect(page.getByPlaceholder('name@example.com')).toHaveValue('chiragmalik@gmail.com')
    await page.locator('//input[@value="Male"]').click()
    await expect(page.locator('//input[@value="Male"]')).toBeChecked()
    await page.getByPlaceholder('Mobile Number').fill("9501480672")
    expect(page.getByPlaceholder('Mobile Number')).toHaveValue('9501480672')
    await page.locator('//input[@class="subjects-auto-complete__input"]').fill("Computer Science")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.locator('//input[@id="hobbies-checkbox-1"]').check()
    await page.locator('//input[@id="hobbies-checkbox-3"]').check()
    await expect(page.locator('//input[@id="hobbies-checkbox-1"]')).toBeChecked()
    await expect(page.locator('//input[@id="hobbies-checkbox-3"]')).toBeChecked()
    await page.getByPlaceholder('Current Address').fill("Chandigarh university")
    await page.locator('//input[@id="react-select-3-input"]').click()
    await page.keyboard.press('Enter')
    await page.locator('//input[@id="react-select-4-input"]').click()
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.locator('//button[@id="submit"]').click()
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible()


})