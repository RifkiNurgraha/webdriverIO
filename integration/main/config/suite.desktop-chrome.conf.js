const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;
var argv = require('yargs').argv;
const { generate } = require('multiple-cucumber-html-reporter');
const allureReporter = require('@wdio/allure-reporter').default
exports.config = {

  specs: [
    'integration/test/features/desktop/*.feature',
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: '1',
    }
  ],
  sync: true,
  logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true,      // Enables colors for log output.
  screenshotPath: 'reports/errorShots/',   // Saves a screenshot to a given path if a command fails.
  baseUrl: argv.baseUrl,
  waitforTimeout: 90000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count
  reporters: [
    'spec',
    ['junit', {
      outputDir: 'reports/junit-results/',
      outputFileFormat: function (opts) { // optional
        return `results-${opts.cid}.${opts.capabilities}.xml`
      }
    }
    ],

    ['allure', {
      outputDir: 'reports/allure-results/',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
      useCucumberStepReporter: true
    }
    ],
    ['cucumberjs-json', {
      jsonFolder: 'reports/cucumber-report/',
      language: 'en',
    }
    ]
  ],

  services: ['selenium-standalone'],
  framework: 'cucumber',
  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: [
      'integration/main/steps/desktop/*.js'
    ],   // <string[]> (file/dir) require files before executing features
    backtrace: true,    // <boolean> show full backtrace for errors
    //compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    compiler: [], // <string[]> filetype:compiler used for processing required features
    failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
    dryRun: false,      // <boolean> invoke formatters without executing steps
    failFast: false,    // <boolean> abort the run on first failure
    ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
    name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    snippets: true,     // <boolean> hide step definition snippets for pending steps
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    snippets: false,    // <boolean> hide step definition snippets for pending steps
    source: false,      // <boolean> hide source uris
    profile: [],        // <string[]> (name) specify the profile to use
    strict: true,       // <boolean> fail if there are any undefined or pending steps
    tagExpression: '@test',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
    timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
    tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
    snippetSyntax: undefined,           // <string> specify a custom snippet syntax
  },

  //
  // =====
  // Hooks
  // =====
  // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function () {
    /**
     * Setup the Chai assertion framework
     */
    browser.maximizeWindow();
    browser.deleteCookies();
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
    global.config = require('./../../config/suite.desktop-chrome.conf');
  },
  onComplete: () => {
    // Generate the report when it all tests are done
    generate({
      jsonDir: 'reports/cucumber-report/',
      reportPath: 'reports/cucumber-report/',
      saveCollectedJSON: true
    });
  },
  //
  // after: function (capabilities, specs) {
  //   //do your stuff
  // },
  //
  // beforeStep: function (stepResult) {
  //     //do your stuff
  // },
  //
  // afterStep: function (stepResult) {
  //     //do your stuff
  // },
  //
  //
  // beforeFeature: function (feature) {
  //     //do your stuff
  // },
  //
  // afterFeature: function (feature) {
  //     //do your stuff
  // },
  //
  // beforeScenario: function (scenario) {
  //     //do your stuff
  // },
  // afterScenario: function (scenarioResult) {
  //     //do your stuff
  // },
  afterScenario: function (uri, feature, scenario, sourceLocation) {
    //description
    allureReporter.addDescription('File Path: ' + uri)
    //platform
    if ({ tags: "@desktop" }) {
      allureReporter.addFeature('DESKTOP');
      allureReporter.addLabel('tag', 'desktop');
    };
    //severity
    if ({ tags: "@normal" }) {
      allureReporter.addSeverity('normal')
    };
    if ({ tags: "@critical" }) {
      allureReporter.addSeverity('critical')
    };
    //TestId
    var testID = scenario.tags[3].name.replace(/[@]/g, '');
    allureReporter.addTestId(testID)
    //Screenshot
    if (sourceLocation.status == 'failed') {
      browser.takeScreenshot();
    }
  }
};
