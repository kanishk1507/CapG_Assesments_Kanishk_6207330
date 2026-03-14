import { test, expect } from "@playwright/test"
import fs from "fs"
import path from "path"
let data = JSON.parse(
  fs.readFileSync(path.join(__dirname,"../testdata/products.json"),"utf-8")
)
test("Amazon product search validation", async ({ page }) => {
    for(let d of data){
        let product = d.product
        await page.goto("https://www.amazon.in")
        await page.locator("#twotabsearchtextbox").fill(product)
        await page.keyboard.press("Enter")
        const products = page.locator('[data-component-type="s-search-result"] h2 span')
        await expect(products.first()).toBeVisible({ timeout: 15000 })
        const [newPage] = await Promise.all([
            page.context().waitForEvent("page"),
            products.first().click()
        ])
        await newPage.waitForLoadState()
        const productTitle = newPage.locator("#productTitle").first()
        await expect(productTitle).toBeVisible()
        console.log("Validated product:", await productTitle.textContent())
        await newPage.close()
    }
})