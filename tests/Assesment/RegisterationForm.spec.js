
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// const jsonPath = path.resolve('DDT/data.json');
// const { Data } = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));


// //VALID DATA
// for (const d of Data.valid) {
//     test(`Registration valid - ${d.firstName}`, async ({ page }) => {

//         await page.goto('https://demoqa.com/automation-practice-form');

//         await page.fill('#firstName', d.firstName || '');
//         await page.fill('#lastName', d.lastName || '');
//         await page.fill('#userEmail', d.email || '');

//         if (d.gender) {
//             await page.locator(`input[value="${d.gender}"]`).check();
//         }

//         await page.fill('#userNumber', d.mobile || '');

//         // Subjects
//         const subjectsInput = page.locator('.subjects-auto-complete__value-container input').first();
//         for (const subject of d.subjects || []) {
//             await subjectsInput.fill(subject);
//             await page.keyboard.press('Enter');
//         }

//         //Hobbies FIX (click label text)
//         for (const hobby of d.hobbies || []) {
//             await page.getByText(hobby).click();
//         }

//         // Upload
//         if (d.picturePath) {
//             await page.setInputFiles('#uploadPicture', path.resolve(d.picturePath));
//         }

//         await page.fill('#currentAddress', d.currentAddress || '');

//         if (d.state) {
//             await page.locator('#state').click();
//             await page.getByText(d.state).click();
//         }

//         if (d.city) {
//             await page.locator('#city').click();
//             await page.getByText(d.city).click();
//         }

//         await page.locator('#submit').click();

//         console.log("Submitted:", d.firstName);

//         //VERY IMPORTANT → close popup
//         await page.locator('#closeLargeModal').click();
//     });
// }


// // INVALID DATA
// for (const d of Data.invalid) {
//     test(`Registration invalid - ${d.firstName}`, async ({ page }) => {

//         await page.goto('https://demoqa.com/automation-practice-form');

//         await page.fill('#firstName', d.firstName || '');
//         await page.fill('#lastName', d.lastName || '');
//         await page.fill('#userEmail', d.email || '');
//         await page.fill('#userNumber', d.mobile || '');

//         await page.locator('#submit').click();

//         console.log("Tried invalid:", d.firstName);
//     });
// }


test("Registeration" , async({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    await expect(page).toHaveURL(/automation-practice-form/);
    await expect(page.getByText('Student Registration Form')).toBeVisible()
    await page.getByPlaceholder('First Name').fill("Chirag")
    await expect(page.getByPlaceholder('First Name')).toHaveValue('Chirag')
    await page.getByPlaceholder('Last Name').fill("Malik")
    await expect(page.getByPlaceholder('Lastt Name')).toHaveValue('Malik')
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