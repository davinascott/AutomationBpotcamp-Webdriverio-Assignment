const CreateAccountPage = require('../pageobjects/createaccount.page');
const SecurePage = require('../pageobjects/secure.page');
const CreateAcctData = require('../data/createaccountdata');

describe('My Create Account application', async () => {
    for(const record of CreateAcctData){
        it('should create a valid account', async () => {
            await CreateAccountPage.open();
            await CreateAccountPage.createaccount(record.firstname,record.lastname,record.email,record.password,record.confirmpassword);
            if (record.scenario == "Empty Required Field - Firstname"){
                await expect(browser).toHaveUrl(record.expectedUrl);
                await expect(CreateAccountPage.errFirstname).toHaveTextContaining(record.message);
            } else if (record.scenario == "Mismatched password") {
                await expect(browser).toHaveUrl(record.expectedUrl);
                await expect(CreateAccountPage.errMismatchedPassword).toHaveTextContaining(record.message);
            } else if (record.scenario = "Email already registered") {
                await expect(browser).toHaveUrl(record.expectedUrl);
                await expect(CreateAccountPage.errDuplicateEmail).toHaveTextContaining(record.message);
            } else {
                await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/');
                await expect(SecurePage.flashAlert).toHaveTextContaining(record.message);
            }
        });
    }
});