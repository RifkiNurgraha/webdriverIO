const { Given, When, Then } = require('cucumber');
const page = require('./../../pages/desktop/login_page');

Given(/^user go to login page$/, function() {
    page.login.url();
});
When(/^User fill "([^"]*)" "([^"]*)" at login page$/, function (param1, param2) {
    page.login.input(param1, param2);
});
When(/^User click "([^"]*)" at login page$/, function (param) {
    page.login.clickButton(param);
});
Then(/^user at login page$/, function() {
    page.login.assert("login");
});
Then(/^user see "([^"]*)" at login page$/, function(param) {
    page.login.assert(param);
});

