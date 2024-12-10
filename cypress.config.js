const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/Features/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    supportFile: "cypress/support/e2e.js",

    env: {
      username: "nikirai48@gmail.com",
      password: "Ajazwahaa@11",
    },
  },
});
