//c//onst { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () {
        return $('//*[@name="send"]');
    }

    get inputUsername() {
        return $('//*[@name="login[username]"]');
    }

    get inputPassword() {
        return $('//*[@name="login[password]"]');
    }

    get btnForgetPassword() {
        return $('//*[@class="action remind"]');
    }

    get loginPageHeader() {
        return $('//*[@data-ui-id="page-title-wrapper"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username,password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/login');
    }
}

module.exports = new LoginPage();