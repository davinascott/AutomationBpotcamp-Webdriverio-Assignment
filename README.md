# AutomationBpotcamp-Webdriverio-Assignment
Quality Works Bootcamp Webdriverio Assignment - Week 7

To run project:
1. Clone the repo and run npm install
2. There are two e2e files to run the test. Use the command 'npm run createaccount' to run the create account test. This file will include the negative tests. To run the create account test more than once, please increment the number in the email field of the createaccountdata.js for the 'Happy Path' scenario.
3. Use the command 'npm run alltests' to run the flow from login to verify the orderhistory in order of login, add to cart, checkout and order history verification. This test covers two scenarios for checkout, one where its being done by a return shopper who already inputed shipping details and one who did not.
4. The tests can be run as standalone tests by using .only or .skip to exclude tests
5. The order history test should be run in conjunction with the checkout test
6. Please ensure that an item is the cart if you want to run the checkout test as a standalone
