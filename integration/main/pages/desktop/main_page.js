var config = require('./../../config/suite.desktop-chrome.conf');
//-----------------------------ELEMENT---------------------------------//
const elements = {
    //button
    get profilAccountButton() { return $('#vm__white-header-dweb > section > header > div.sigil-header__main-nav-bar > div > div > div:nth-child(2) > div > span:nth-child(6) > div > div > a > div') },
    get loginButton() { return $('.sigil-header__nav.te-header-login') }
}
//-----------------------------MAIN------------------------------------//
exports.main = {
    url: function () {
        browser.url(config.config.baseUrl);
    },
    assert: function (param) {
        switch (param) {
            case 'with login':
                elements.profilAccountButton.isDisplayed();
                break;
            case 'without login':
                elements.loginButton.isDisplayed();
                break;
        }
    }
};