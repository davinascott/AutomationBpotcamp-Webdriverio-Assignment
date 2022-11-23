const CreateAccountPage = require('../pageobjects/createaccount.page');
const SecurePage = require('../pageobjects/secure.page');
//const CreateAcctData = require('../data/createaccountdata');

describe('My Create Account application', () => {
    it('should create a valid account', async () => {
        await CreateAccountPage.open();

        await CreateAccountPage.createaccount('Terry','Scott','terry.scott@gmail.com','passowrd@1','passowrd@1');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Thank you for registering with Fake Online Clothing Store.');
    });

    it('should not be able to create account with invalid data', async () =>{
        await CreateAccountPage.open();
        //console.log(CreateAccountData[0]);
    });

});