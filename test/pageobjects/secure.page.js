

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//*[@id="maincontent"]/div[1]/div[2]/div/div/div');
    }
}

module.exports = new SecurePage();
