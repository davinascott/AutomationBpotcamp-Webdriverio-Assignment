const LoginPage = require('../pageobjects/login.page');
const MyAcountPage = require('../pageobjects/myaccount.page');

describe('My Log In', () => {
    it('should successfully log a registered user in', async () => {
        await LoginPage.open();

        await expect(LoginPage.loginPageHeader).toBeExisting();
        await expect(LoginPage.loginPageHeader).toHaveTextContaining('Customer Login');
        await LoginPage.login("sirriraymond@gmail.com","passowrd@1");
        await expect(MyAcountPage.accountPageHeader).toBeExisting();
        await expect(MyAcountPage.accountPageHeader).toHaveTextContaining('Welcome, ');
    });
});