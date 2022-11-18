//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get panelHeader () {
        return $('//*[@class="panel header"]');
    }

    get logoHome() {
        return $('//*[@class="logo"]');
    }

    get cartItem() {
        return $('//*[@class="product-items widget-product-grid"]/li[1]');
    }

    get BtnAddToCart() {
        return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@title="Add to Cart"]');
    }

    get itemSizeSmall() {
        return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@class="swatch-attribute-options clearfix"][1]//*[@option-label="S"]');
    }

    get itemColor() {
        return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@class="swatch-attribute color"]//*[@option-label="Purple"]');
    }

    get successPanelHeader() {
        return $('//*[@id="maincontent"]/div[2]/div[2]/div/div/div');
    }

    get showCart() {
        return $('//*[@class="action showcart"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addToCart () {
        await (this.cartItem).moveTo();
        await this.itemSizeSmall.click();
        await this.itemColor.click();
        await this.BtnAddToCart.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();



//*[@class="logo"]