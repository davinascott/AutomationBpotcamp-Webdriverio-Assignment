//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');
const HomePage = require('../pageobjects/home.page');



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
        return $('//*[@name="firstname"]');
    }

    get lastName() {
        return $('//*[@name="lastname"]');
    }

    get company() {
        return $('//*[@name="company"]');
    }

    get streetAddress() {
        return $('//*[@name="street[0]"]');
    }

    get city() {
        return $('//*[@name="city"]');
    }

    get state() {
        return $('//*[@name="region_id"]');
    }

    get zipCode() {
        return $('//*[@name="postcode"]');
    }

    get country() {
        return $('//*[@name="country_id"]');
    }

    get phoneNumber() {
        return $('//*[@name="telephone"]');
    }

    get fixedShippingMethod() {
        return $('//*[@name="ko_unique_1"]');
    }

    get tableRateShippingMethod() {
        return $('//*[@name="ko_unique_2"]');
    }

    get btnNext() {
        return $('//*[@data-role="opc-continue"]');
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

    get showCart() {
        return HomePage.showCart;
    }

    get email() {
        return $('//*[@id="customer-email"]');
    }

    get shippingDiv() {
        return $('//*[@id="checkout-step-shipping"]/div[1]/div/div/div/button')
        //return $('//*[@id="checkout-step-shipping"]/div[1]/div/div/div')
    }

    get checkoutPP(){
        return $('//*[@id="checkout"]/ul/li[1]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async checkout (fName,lName,femail,company,streetaddress,city,state,zipcode,country,phonenum,fSM,) 
     async checkoutFirstTimeLoggedInShipper (company,streetaddress,city,state,zipcode,country,phonenum,fSM) {
        // await this.firstName.setValue(fName);
        // await this.lastName.setValue(lName);
        //await this.email.setValue(fEmail);
        await this.company.setValue(company);
        await this.streetAddress.setValue(streetaddress);
        await this.city.setValue(city);
        await this.state.selectByVisibleText(state);
        await this.zipCode.setValue(zipcode);
        await this.country.selectByVisibleText(country);
        await this.phoneNumber.setValue(phonenum);
        if (fSM == 'yes') {
            await this.fixedShippingMethod.click();
        } 
        await this.btnNext.click();
    }

    async checkoutReturnLoggedInShopper() {
        await this.fixedShippingMethod.click();
        await this.btnNext.click();
        //await browser.pause(3000);
        //await browser.setTimeout({ 'pageLoad': 5000 });
        await this.btnPlaceOrder.click();
    }

    async checkoutNotLoggedInShipper (fName,lName,fEmail,company,streetaddress,city,state,zipcode,country,phonenum,fSM) {
        await this.firstName.setValue(fName);
        await this.lastName.setValue(lName);
        await this.email.setValue(fEmail);
        await this.company.setValue(company);
        await this.streetAddress.setValue(streetaddress);
        await this.city.setValue(city);
        await this.zipCode.setValue(zipcode);
        await this.state.selectByVisibleText(state);
        await this.country.selectByVisibleText(country);
        await this.phoneNumber.setValue(phonenum);
        if (fSM == 'yes') {
            await this.fixedShippingMethod.click();
        } 
        //await this.btnNext.click();
    }

    // async selectCity () {
        
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkout/#shipping');
    }
}

module.exports = new CheckOutPage();