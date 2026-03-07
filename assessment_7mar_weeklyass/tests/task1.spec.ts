import {test} from "@playwright/test"
test("icc ranks",async ({page})=>{
    await page.goto('https://www.icc-cricket.com/rankings')
    await page.locator('//a[@href="/rankings/batting/womens/odi"]').click();
    let ranking=await page.locator('//*[@id="col2_6NNy14S1IzNIhvtKzSnni"]/div/div[3]/div/div/div/table/tbody/tr[2]/td[1]/div/span').textContent();
    console.log("Laura Wolvaardt rank : ",ranking);

    await page.screenshot({path:"task1.png"});
})