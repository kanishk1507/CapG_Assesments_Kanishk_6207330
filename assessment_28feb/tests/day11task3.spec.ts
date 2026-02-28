import {test} from "@playwright/test"

test("task3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("kanishk15");
    await page.locator('//input[@id="email"]').fill("abc@gmail.com");
    await page.locator('//input[@id="password"]').fill("Abcde@12345");
    await page.locator('button[type="submit"]').click();
    await page.locator('//input[@id="email"]').fill("abc@gmail.com");
    await page.locator('//input[@id="password"]').fill("Abcde@12345");
    await page.locator('button[type="submit"]').click();
    
    await page.screenshot({ path:'task3.png'});

});