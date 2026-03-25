import data from '../testData/bankingdata.json'
class BankingPage{
    selectManagerLogin: any
    addCustomerTab: any
    openAccountTab: any
    clickHome: any
    addCustButton: any

    fname: any
    lname: any
    pCode: any

    selectCustName: any
    selectCurrency: any
    accProcess: any

    custLogin: any
    custName: any
    cLoginbtn: any
    depositTab: any
    withdrawlTab: any
    depAmount: any
    withdAmount: any
    depositBtn: any
    withdrawBtn: any

    balance: any

    constructor(page){
        this.page=page
        this.selectManagerLogin=page.locator('[ng-click="manager()"]')
        this.addCustomerTab=page.locator('[ng-click="addCust()"]')
        this.clickHome=page.locator('[ng-click="home()"]')

        this.openAccountTab=page.locator('[ng-click="openAccount()"]')
        

        this.fname=page.locator('[ng-model="fName"]')
        this.lname=page.locator('[ng-model="lName"]')
        this.pCode=page.locator('[ng-model="postCd"]')
        this.addCustButton=page.locator('[type="submit"]')

        this.selectCustName=page.locator('#userSelect')
        this.selectCurrency=page.locator('#currency')
        this.accProcess=page.locator('[type="submit"]')

        this.custLogin=page.locator('[ng-click="customer()"]')
        this.custName=page.locator('#userSelect')
        this.cLoginbtn=page.locator('[type="submit"]')

        this.depositTab=page.locator('[ng-click="deposit()"]')
        this.withdrawlTab=page.locator('[ng-click="withdrawl()"]')

        this.depAmount=page.locator('[ng-model="amount"]')
        this.withdAmount=page.locator('[ng-model="amount"]')
        this.depositBtn=page.locator('[type="submit"]')
        this.withdrawBtn=page.locator('[type="submit"]')
        
        

    }
    async addCustomerDetails(fName,lName,pCode){
        await this.selectManagerLogin.click()
        await this.addCustomerTab.click()
        await this.fname.fill(data.customer.firstName)
        await this.lname.fill(data.customer.lastName)
        await this.pCode.fill(data.customer.postCode)
        await this.addCustButton.click()
    }
    async OpenAccount(){
        await this.openAccountTab.click()
        await this.selectCustName.selectOption(data.customer.firstName+" "+data.customer.lastName)
        await this.selectCurrency.selectOption(data.account.currency)
        await this.accProcess.click()
        await this.clickHome.click()
    }
    async customerLogin(){
        await this.custLogin.click()
        await this.custName.selectOption(data.customer.firstName+" "+data.customer.lastName)
        await this.cLoginbtn.click()

        await this.depositTab.click()
        await this.depAmount.fill(data.transactions.deposit.toString())
        await this.depositBtn.click()

        await this.withdrawlTab.click()
        await this.withdAmount.fill(data.transactions.withdraw.toString())
        await this.withdrawBtn.click()
    }
}
export default BankingPage;