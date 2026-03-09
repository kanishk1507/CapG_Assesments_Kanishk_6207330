import { test, expect } from '@playwright/test';

test('Login scenario - QSpiders Demo', async ({ page }) => {

  test.setTimeout(20000);
  await page.goto('https://demoapps.qspiders.com/ui/login');

  await page.getByLabel('Email Id').fill('admin@gmail.com');
  await page.getByLabel('Password').fill('admin@123');

  await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
await expect(page).toHaveScreenshot("task1.png");
});