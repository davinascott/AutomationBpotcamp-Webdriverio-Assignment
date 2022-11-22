const CheckOutPage = require('../pageobjects/checkout.page');
const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const MyAccountPage = require('../pageobjects/myaccount.page');

describe('My Add to Cart application', () => {
    before('Navigate to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("Terry.scott@gmail.com","passowrd@1");
        await expect(MyAccountPage.accountPageHeader).toBeExisting();
        await expect(MyAccountPage.accountPageHeader).toHaveTextContaining('Welcome, ');
        await expect(MyAccountPage.showCart).toBeExisting();
        await MyAccountPage.showCart.click();
    });

    it('should checkout the cart of an already logged in customer', async () => {
        //await CheckOutPage.open();
        await CheckOutPage.btnProceedToCheckout.click();
        await CheckOutPage.checkoutFirstTimeLoggedInShipper('123 streetaddress','Westminister','Colorado','12345-6789','United States','17204136673','yes');
        await CheckOutPage.btnNext.click();
        await CheckOutPage.btnPlaceOrder.click();
        await expect(CheckOutPage.succesCheckoutPanel).toBeExisting();
        await expect(CheckOutPage.succesCheckoutPanel).toHaveTextContaining('Thank you for your purchase!');
        //await CheckOutPage.checkout('Roweina','Trafler','rtrafler@gmail.com','123 streetaddress','Westminister','Colorado','12345-6789','United States','17204136673','yes');

        // await expect(HomePage.panelHeader).toBeExisting();
        // //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        // await expect(HomePage.cartItem).toBeExisting();
        // await HomePage.addToCart();
        // await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        // await HomePage.showCart();
    });
});