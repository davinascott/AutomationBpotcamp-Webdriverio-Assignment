//const { default: $ } = require('webdriverio/build/commands/browser/$');
//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get createAccButton () {
        return $('//*[@class="header links"][1]/li[3]/a');
    }

    get inputFirstName() {
        return $('//*[@id="firstname"]');
    }

    get inputLastName() {
        return $('//*[@id="lastname"]');
    }

    get checkboxNewsletter() {
        return $('//*[@id="is_subscribed"]');
    }

    get inputEmail() {
        return $('//*[@id="email_address"]');
    }

    get inputPassword() {
        return $('//*[@id="password"]');
    }

    get confirmPassword() {
        return $('//*[@id="password-confirmation"]');
    }

    get btnSubmit () {
        //return $('button[type="submit"]');
        return $('//*[@title="Create an Account"]');
    }

    get errMismatchedPassword() {
        return $('//*[@id="password-confirmation-error"]');
    }

    get errDuplicateEmail() {
        return $('//*[@role="alert"]');
    }

    get errFirstname() {
        return $('//*[@id="firstname-error"]');
    }

    get errLastName() {
        return $('//*[@id="lastname-error"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async createaccount (fName,lName,email,password,cpassword) {
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
        return super.open('customer/account/create');
    }
}

module.exports = new CreateAccountPage();