var reporter = require('cucumber-html-reporter');
var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report/merged-output.json',
    output: 'reports/cucumber-report/report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "-",
        "Test Environment": "STAGING",
        "Browser": "-",
        "Platform": "-",
        "Parallel": "-",
        "Executed": "localhost"
    }
};

reporter.generate(options);