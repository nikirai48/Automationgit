const report = require("multiple-cucumber-html-reporter");

// Start time and completion time are set using environment variables or captured dynamically
const applicationUrl = process.env.APPLICATION_URL || "Test URL not available";
const startTime = process.env.START_TIME || new Date().toUTCString();
const releaseVersion = process.env.RELEASE_VERSION || "1.2.3";
const completionTime = process.env.COMPLETION_TIME || new Date().toUTCString();

report.generate({
  jsonDir: "./cypress/lambdatest-artifacts", // ** Path of .json file executed on LambdaTest **
  jsonDir: "./cypress/results/cucumber-json", // ** Path of .json file executed locally from terminal/cypress runner **
  reportPath: "./cypress/reports/cucumber-html-report", // ** Path of reports to be generated **
  reportPath: "./cypress/reports/cucumber-html-report-test", // ** Path of reports to be generated - local test purpose **
  saveCollectedJSON: true,
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "LambdaTest cloud",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Cucumber HTML Report",
    data: [
      { label: "Project", value: "Cypress Project" },
      { label: "Release", value: releaseVersion },
      { label: "Application URL", value: applicationUrl },
      { label: "Execution Start Time", value: startTime },
      { label: "Completion Time", value: completionTime },
    ],
  },
});
