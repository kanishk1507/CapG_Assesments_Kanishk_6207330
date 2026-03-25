import { test, expect } from '@playwright/test';
import BankingPage from '../PageObjectModel/banking.page';
import data from '../testData/bankingdata.json';


test.describe('E2E Banking Flow', () => {
  test('e2e', async ({ page }) => {
    const bankingPage = new BankingPage(page);
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    await bankingPage.addCustomerDetails(
      data.customer.firstName,
      data.customer.lastName,
      data.customer.postCode
    );
    await bankingPage.OpenAccount();
    await bankingPage.customerLogin();    

    await bankingPage.customerLogin();
    await page.locator('[ng-click="byebye()"]').click()
    
    });

  
});