const Page = require('./page');

class MyAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnMyOrders () {
        return $('//*[@id="block-collapsible-nav"]/ul/li[2]/a');
    }

    get accountPageHeader() {
        return $('//span[@class="logged-in"]');
    }

    get showCart() {
        return $('//*[@class="action showcart"]');
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account');
    }
}

module.exports = new MyAccountPage();