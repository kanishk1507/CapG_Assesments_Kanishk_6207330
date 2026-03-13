import { test, expect } from '@playwright/test';
import excel from "exceljs"
import path from "path"

test("Reading test data", async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(
        path.join(__dirname, "testdata/readexcel.xlsx")
    );
    const sheet1 = book.getWorksheet("Sheet1");
    for (let i = 2; i <= sheet1.rowCount; i++) {
        const row = sheet1.getRow(i);
        const urlCell = row.getCell(1).value;
        const url = typeof urlCell === "object" ? urlCell.text : urlCell;
        const name = String(row.getCell(2).value);
        const email = String(row.getCell(3).value);
        const password = String(row.getCell(4).value);
        
        console.log(url, name, email, password);        
        await page.goto(url);
        await page.fill("#name", name);
        await page.fill("#email", email);
        await page.fill("#password", password);
        await page.click("button[type='submit']");
    }
});