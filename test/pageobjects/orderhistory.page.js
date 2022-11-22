//const { default: $ } = require('webdriverio/build/commands/browser/$');
//const { default: $ } = require('webdriverio/build/commands/element/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderHistoryPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Expect header to have text containing 'My Orders'
     get headerMyOrders () {
        return $('//*[@id="maincontent"]/div[2]/div[1]/div[1]/h1/span');
    }

    get orderNumber() {
        return $('//*[@class="checkout-success"]/p[1]/a/strong');
    }

    get btnFirstOrderItemInTable() {
        return $('//*[@id="my-orders-table"]/tbody/tr[1]/td[6]/a[1]');
    }

    get firstOrderDetails() {
        return $('//*[@id="my-orders-table"]/tbody[1]/tr/td[1]/strong');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //  async checkout (fName,lName,company,streetaddress,city,state,zipcode,country,phonenum,fSM,) {
    //     await this.inputFirstName.setValue(fName);
    //     await this.inputLastName.setValue(lName);
    //     await this.inputEmail.setValue(email);
    //     await this.confirmPassword.setValue(cpassword);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('sales/order/history/');
    }
}

module.exports = new OrderHistoryPage();