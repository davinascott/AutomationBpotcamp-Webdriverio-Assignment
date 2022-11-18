const CreateAccountPage = require('../pageobjects/createaccount.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

describe('My Add to Cart application', () => {
    it('should add an item to cart from the homepage', async () => {
        await HomePage.open();

        await expect(HomePage.panelHeader).toBeExisting();
        //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        await expect(HomePage.cartItem).toBeExisting();
        await HomePage.addToCart();
        await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        await HomePage.showCart();
    });
});