const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const CheckOutPage = require('../pageobjects/checkout.page');
const OrderHistoryPage = require('../pageobjects/orderhistory.page')
const CheckOutData = require('../data/firsttimeshoppercheckoutdata');

for (const record of CheckOutData) {
    describe('My End to End test', () => {
            before('Sign In and Navigate to Homepage', async () => {
                await LoginPage.open();
                await LoginPage.login(record.userEmail,record.password);
                await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/customer/account/");
            });

            after('Sign out of application', async () => {
                await HomePage.logoHome.click();
                await HomePage.signInDropDown.click();
                await HomePage.btnSignOut.click();
            });
        
        
            it('should add an item to cart from the homepage', async () => {
                await HomePage.logoHome.click();
                await expect(HomePage.panelHeader).toBeExisting();
                await expect(HomePage.cartItem).toBeExisting();
                await HomePage.addToCart();
                await expect(HomePage.successPanelHeader).toHaveTextContaining('You added ');
            });
        
            it('should checkout the cart of an already logged in customer', async () => {
                await CheckOutPage.open();
                //await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/checkout/cart/#shipping");
                //await CheckOutPage.btnProceedToCheckout.click();
                //await expect(await CheckOutPage.shippingDiv).toBeExisting();
                if (record.firstTimeShopper == 'Yes') {
                    //await CheckOutPage.checkoutFirstTimeLoggedInShipper('company','123 streetaddress','Westminister','Colorado','12345-6789','United States','17204136673','yes');
                    await CheckOutPage.checkoutFirstTimeLoggedInShipper(record.company,record.streetAddress,record.city,record.state,record.zipcode,record.country,record.phoneNumber,record.fsm);
                    await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#payment');
                    await expect(CheckOutPage.btnPlaceOrder).toBeExisting();
                    await CheckOutPage.btnPlaceOrder.click();
                } else {
                    await CheckOutPage.checkoutReturnLoggedInShopper();
                }
                await expect(CheckOutPage.succesCheckoutPanel).toBeExisting();
                // orderNum = CheckOutPage.orderNumberContainer.getText();
                // console.log(orderNum);
            });
        
            it('should verify order via order history page', async () => {
                await HomePage.open();
                await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/');
                // await HomePage.signInDropDown.click();
                // await HomePage.btnMyAccount.click();
                // await HomePage.btnMyOrders.click();
                await OrderHistoryPage.open();
                await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/sales/order/history/');
                await expect(OrderHistoryPage.headerMyOrders).toBeExisting();
                await OrderHistoryPage.btnFirstOrderItemInTable.click();
                const orderItemText = await OrderHistoryPage.firstOrderDetails.getText();
                console.log(orderItemText);
                await expect(orderItemText == "Radiant Tee");
            });
    });
}
