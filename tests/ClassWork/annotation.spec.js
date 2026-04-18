import {test} from '@playwright/test';

// test.only("Test 1", async() => console.log("Test 1"));
// test("Test 2", async() => console.log("Test 2"));
// test("Test 3", async() => console.log("Test 3"));
// test.skip("Test 4", async() => console.log("Test 4"));
// test.fixme("Test 5", async() => console.log("Test 5"));

test.describe("Login", () => {
    console.log("Login tests are running");
    test.skip("Login test 1", async() => console.log("Login test 1"));
    test.only("Login test 2", async() => console.log("Login test 2"));
});

test.fail("Test 6", async() => {
    await page.goto("https://www.google.com");
});