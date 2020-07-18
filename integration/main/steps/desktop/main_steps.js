const { Given, When, Then } = require('cucumber');
const page = require('./../../pages/desktop/main_page');

Then(/^user at main page "([^"]*)"$/, function (param) {
    page.main.assert(param);
});