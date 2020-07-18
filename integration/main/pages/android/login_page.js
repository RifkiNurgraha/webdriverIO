//-----------------------------DATA------------------------------------//
const testData = {
    email: 'rifki.nurgraha+production@tokopedia.com',
    password: 'tokopedia789',
};
//-----------------------------ELEMENT---------------------------------//
const elements = {
    //button
    get loginButton() { return $('android=new UiSelector().text("LOGIN").className("android.widget.Button")') },
    //textfield
    get passwordTextfield() { return $('android=new UiSelector().resourceId("com.loginmodule.learning:id/textInputEditTextPassword").className("android.widget.EditText")') },
    get emailTextfield() { return $('android=new UiSelector().resourceId("com.loginmodule.learning:id/textInputEditTextEmail").className("android.widget.EditText")') },
    //label
    get warningLabel() { return $('android=new UiSelector().text("Wrong Email or Password").className("android.widget.TextView")') },
    get warningEmailLabel() { return $('android=new UiSelector().text("Enter Valid Email").className("android.widget.TextView")') },
    get successLoginNameLabel() { return $('android=new UiSelector().text("com.loginmodule.learning:id/textViewName").className("android.widget.TextView")') },
    get successLoginLabel() { return $('android=new UiSelector().text("Android NewLine Learning").className("android.widget.TextView")') },

}
//-----------------------------MAIN------------------------------------//
exports.login = {
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
            case 'email':
                elements.emailTextfield.waitForDisplayed({ timeout: 3000 });
                elements.emailTextfield.clearValue();
                elements.emailTextfield.setValue(param2);
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
            case 'login page':
                elements.loginButton.waitForDisplayed({ timeout: 3000 });
                break;
            case 'login success':
                elements.successLoginLabel.waitForDisplayed({ timeout: 3000 });
                break;
            case 'warning message':
                elements.warningLabel.waitForDisplayed({ timeout: 3000 });
                break;
            case 'warning email message':
                elements.warningEmailLabel.waitForDisplayed({ timeout: 3000 });
                break;
        }
    },
};