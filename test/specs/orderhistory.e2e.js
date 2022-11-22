const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
//const CheckOutPage = require('../pageobjects/checkout.page');
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

    it('should verify order via order history page', async () => {
        await OrderHistoryPage.open();
        await expect(OrderHistoryPage.headerMyOrders).toBeExisting();
        await OrderHistoryPage.btnFirstOrderItemInTable.click();
        const orderItemText = await OrderHistoryPage.firstOrderDetails.getText();
        console.log(orderItemText);
        //await expect(HomePage.panelHeader).toHaveTextContaining('Welcome');
        //await HomePage.showCart();
    });
});