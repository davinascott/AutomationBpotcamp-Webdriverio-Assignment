const CreateAccountPage = require('../pageobjects/createaccount.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Create Account application', () => {
    it('should create a valid account', async () => {
        await CreateAccountPage.open();

        await CreateAccountPage.createaccount('Terry','Scott','terry.scott@gmail.com','passowrd@1','passowrd@1');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Thank you for registering with Fake Online Clothing Store.');
    });
});