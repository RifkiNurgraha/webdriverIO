# Description
This is repository use Webdriver IO and mocha that can be used for Desktop, Lite, Android, Ios, and API in one framework. Use Page Object Model, BDD Cucumber, report mochawesome for API and cucumber report for UI, Allure Report as a Dashboard.

# How do I get set up?
1. Assume that you have node installed and for mobile android or ios installed.
2. Clone this repo.
3. Access the folder.
4. Install all dependencies.
```
$ npm install
```
# Run test:
###  Desktop/Web:
####  Production Env:
* Run Desktop Chrome
```
$ npm run test-prod-desktop-chrome
```
* Run Desktop Firefox
```
$ npm run test-prod-desktop-firefox
```
* Run Desktop Safari
```
$ npm run test-prod-desktop-safari
```
* Run Desktop Opera
```
$ npm run test-prod-desktop-opera
```
* Run Desktop Parallel All Browser
```
$ npm run test-prod-all-browser
```
#### Staging Env:
* Run Desktop Chrome
```
$ npm run test-stag-desktop-chrome
```
* Run Desktop Firefox
```
$ npm run test-stag-desktop-firefox
```
* Run Desktop Safari
```
$ npm run test-stag-desktop-safari
```
* Run Desktop Opera
```
$ npm run test-stag-desktop-opera
```
* Run Desktop Parallel All Browser
```
$ npm run test-stag-all-browser
```
###  Mobile:
* Run Android
```
$ npm run test-android
```
###  API:
* Run Api
```
$ npm run test-api
```
###  Dashboard:
* Run Allure Report Dashboard
```
$ npm run allure-report
```