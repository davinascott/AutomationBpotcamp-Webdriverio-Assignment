
//const { default: $ } = require('webdriverio/build/commands/browser/$');
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

    get cartItemText() {
        return $('//*[@title="Radiant Tee"]');
    }

    get BtnAddToCart() {
        return $('//*[@id="product-addtocart-button"]');
        //return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@title="Add to Cart"]');
    }

    get itemSizeSmall() {
        return $('//*[@id="option-label-size-143-item-167"]');
        //return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@class="swatch-attribute-options clearfix"][1]//*[@option-label="S"]');
    }

    get itemColor() {
        return $('//*[@id="option-label-color-93-item-56"]');
        //return $('//*[@class="product-items widget-product-grid"]/li[1]//*[@class="swatch-attribute color"]//*[@option-label="Purple"]');
    }

    get successPanelHeader() {
        return $('//*[@id="maincontent"]/div[1]/div[2]/div/div/div');
    }

    get showCart() {
        return $('//*[@class="action showcart"]');
    }

    //Needed to access order history
    get myAccount() {
        return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a');
    }

    get signInDropDown() {
        return $('//*[@data-action="customer-menu-toggle"]');
    }

    get btnSignOut() {
        return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[3]/a');
    }

    get btnMyAccount() {
        return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a');
    }

    get btnMyOrders() {
        return $('//*[@id="block-collapsible-nav"]/ul/li[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addToCart () {
        await (this.cartItem).click();
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