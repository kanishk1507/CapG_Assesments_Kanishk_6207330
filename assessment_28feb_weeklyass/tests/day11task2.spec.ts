import { test, expect } from '@playwright/test';

test('Flipkart XPath Validation', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.waitForLoadState('domcontentloaded');
  const closeBtn = page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  await page.fill('//input[@name="q"]', 'phones');
  await page.keyboard.press('Enter');

  await page.waitForSelector('//div[contains(@data-id,"MOB")]');

  const appleFilter = page.locator('//div[contains(text(),"Apple")]');
  if (await appleFilter.first().isVisible()) {
    await appleFilter.first().click();
  }
  await page.waitForTimeout(4000);
  const prices = page.locator('//div[contains(text(),"₹")]');
  const thirdPrice = await prices.nth(2).textContent();
  console.log("Price of 3rd Apple phone:", thirdPrice);

  await page.screenshot({ path: 'task2.png', fullPage: true });
});