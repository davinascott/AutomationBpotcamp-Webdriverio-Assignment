//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnProceedToCheckout () {
        return $('//*[@id="top-cart-btn-checkout"]');
    }

    get firstName() {
        return $('//*[@id="I3AOKCE"]');
    }

    get lastNamr() {
        return $('//*[@id="HRWSLY7"]');
    }

    get company() {
        return $('//*[@id="SYX44G9"]');
    }

    get streetAddress() {
        return $('//*[@id="S9EIOA8"]');
    }

    get city() {
        return $('//*[@id="VK67C2D"]');
    }

    get state() {
        return $('//*[@id="JQ6HAUA"]');
    }

    get zipCode() {
        return $('//*[@id="S4GWL6O"]');
    }

    get country() {
        return $('//*[@id="I8TDWTQ"]');
    }

    get phoneNumber() {
        return $('//*[@id="WD7R0PY"]');
    }

    get fixedShippingMethod() {
        return $('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input');
    }

    get tableRateShippingMethod() {
        return $('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[2]/td[1]/input');
    }

    get btnNext() {
        return $('//*[@id="shipping-method-buttons-container"]/div/button');
    }

    get btnPlaceOrder() {
        return $('//*[@title="Place Order"]');
    }

    //expecting to have text containing 'Thank you for your purchase!'
    get succesCheckoutPanel() {
        return $('//*[@id="maincontent"]/div[1]');
    }
    
    //This is the wrapper of the order number if order is success. Will need this to check Order History.
    get orderNumberContainer() {
        return $('//*[@class="order-number"]/strong')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async checkout (fName,lName,company,streetaddress,city,state,zipcode,country,phonenum,fSM,) {
        await this.inputFirstName.setValue(fName);
        await this.inputLastName.setValue(lName);
        await this.inputEmail.setValue(email);
        await this.confirmPassword.setValue(cpassword);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new CheckOutPage();