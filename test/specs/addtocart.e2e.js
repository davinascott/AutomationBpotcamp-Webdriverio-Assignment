
const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const MyAccountPage = require('../pageobjects/myaccount.page');

describe('My Add to Cart test', () => {
    before('Navigate to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("Terry.scott@gmail.com","passowrd@1");
        await expect(MyAccountPage.accountPageHeader).toBeExisting();
        await expect(MyAccountPage.accountPageHeader).toHaveTextContaining('Welcome, ');
        await HomePage.open();
    });

    it('should add an item to cart from the homepage', async () => {
        await expect(HomePage.panelHeader).toBeExisting();
        //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        await expect(HomePage.cartItem).toBeExisting();
        await HomePage.addToCart();
        await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        //await HomePage.showCart();
    });
});