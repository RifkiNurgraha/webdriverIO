const { Given, When, Then } = require('cucumber');
const page = require('./../../pages/android/login_page');

Given(/^user at login page$/, function() {
    page.login.assert("login page");
});
When(/^User fill "([^"]*)" "([^"]*)" at login page$/, function (param1, param2) {
    page.login.input(param1, param2);
});
When(/^User click "([^"]*)" at login page$/, function (param) {
    page.login.clickButton(param);
});
Then(/^user successfully login$/, function() {
    page.login.assert("login success");
});
Then(/^user see "([^"]*)" at login page$/, function(param) {
    page.login.assert(param);
});

