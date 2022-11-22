const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const CheckOutPage = require('../pageobjects/checkout.page');
const OrderHistoryPage = require('../pageobjects/orderhistory.page')


describe('My End to End test', () => {
    before('Navigate to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("Terry.scott@gmail.com","passowrd@1");
        //await expect(MyAccountPage.accountPageHeader).toBeExisting();
        //await expect(MyAccountPage.accountPageHeader).toHaveTextContaining('Welcome, ');
        await HomePage.open();
    });

    after('Sign out of application', async () => {
        await HomePage.signInDropDown.click();
        await HomePage.btnSignOut.click();
    });

    it('should add an item to cart from the homepage', async () => {
        await expect(HomePage.panelHeader).toBeExisting();
        //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        await expect(HomePage.cartItem).toBeExisting();
        await HomePage.addToCart();
        await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        //await HomePage.showCart();
    });

    it('should checkout the cart of an already logged in customer', async () => {
        //await CheckOutPage.open();
        await CheckOutPage.open();
        //await CheckOutPage.btnProceedToCheckout.click();
        await expect(await CheckOutPage.shippingDiv).toBeExisting();
        await CheckOutPage.checkoutReturnLoggedInShopper();
        //await CheckOutPage.checkoutFirstTimeLoggedInShipper('company','123 streetaddress','Westminister','Colorado','12345-6789','United States','17204136673','yes');
        await expect(CheckOutPage.succesCheckoutPanel).toBeExisting();
        orderNum = CheckOutPage.orderNumberContainer.getText();
        console.log(orderNum);
        //await expect(CheckOutPage.succesCheckoutPanel).toHaveTextContaining('Thank you for your purchase!');
        //await CheckOutPage.checkout('Roweina','Trafler','rtrafler@gmail.com','123 streetaddress','Westminister','Colorado','12345-6789','United States','17204136673','yes');

        // await expect(HomePage.panelHeader).toBeExisting();
        // //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        // await expect(HomePage.cartItem).toBeExisting();
        // await HomePage.addToCart();
        // await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        // await HomePage.showCart();
    });

    it('should verify order via order history page', async () => {
        await OrderHistoryPage.open();
        await expect(OrderHistoryPage.headerMyOrders).toBeExisting();
        //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        await expect(HomePage.cartItem).toBeExisting();
        await HomePage.addToCart();
        await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
        //await HomePage.showCart();
    });
});