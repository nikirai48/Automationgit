const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      process.on("unhandledRejection", (err) => {
        console.log("Unhandled promise rejection:", err);
      });
    },
    specPattern: "cypress/e2e/Features/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    supportFile: "cypress/support/e2e.js",
  },
});
