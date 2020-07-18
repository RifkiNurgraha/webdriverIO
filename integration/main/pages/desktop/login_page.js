var config = require('./../../config/suite.desktop-chrome.conf');
//-----------------------------ELEMENT---------------------------------//
const elements = {
    //button
    get loginButton() { return $('.c-btn--spinner.c-btn.c-btn--large.c-btn--red.c-btn--block.js-btn-menu-login') },
    //textfield
    get userNameTextfield() { return $('[name="user_session[username]"]') },
    get passwordTextfield() { return $('[name="user_session[password]"]') },
    //
    get warningLabel() { return $('.c-fld__error') },
}
//-----------------------------MAIN------------------------------------//
exports.login = {
    url: function () {
        browser.url(config.config.baseUrl +'/login');
    },
    clickButton: function (param) {
        switch (param) {
            case 'login':
                elements.loginButton.waitForDisplayed({ timeout: 3000 });
                elements.loginButton.click();
                break;
        }
    },
    input: function (param1,param2) {
        switch (param1) {
            case 'username':
                elements.userNameTextfield.waitForDisplayed({ timeout: 3000 });
                elements.userNameTextfield.clearValue();
                elements.userNameTextfield.setValue(param2);
                break;
            case 'password':
                elements.passwordTextfield.waitForDisplayed({ timeout: 3000 });
                elements.passwordTextfield.clearValue();
                elements.passwordTextfield.setValue(param2);
                break;
        }
    },
    assert: function (param) {
        switch (param) {
            case 'login':
                elements.userNameTextfield.waitForDisplayed({ timeout: 3000 });
                elements.passwordTextfield.waitForDisplayed({ timeout: 3000 });
                break;
            case 'warning message':
                elements.warningLabel.waitForDisplayed({ timeout: 3000 });
                break;
        }
    },
};