const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it.skip('should login with a valid account', async () => {
        await LoginPage.open();

        await LoginPage.login('roni_cost@example.com','roni_cost@example.com');
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            '');
    });
});