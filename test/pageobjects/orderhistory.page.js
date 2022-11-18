//const { default: $ } = require('webdriverio/build/commands/browser/$');
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
        return $('//*[@id="my-orders-table"]/tbody/tr/td[1]');
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