const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "t63ouf",

  // ✅ Use only Mochawesome
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      process.on("unhandledRejection", (err) => {
        console.log("Unhandled promise rejection:", err);
      });

      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },

    specPattern: ["cypress/e2e/Features/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 7000,
    supportFile: "cypress/support/e2e.js",
  },

  env: {
    APPLICATION_URL: "https://prgloo-dev-admin-01.azurewebsites.net/login/",
    USERNAME: "nikirai48@gmail.com",
    PASSWORD: "Asuslaptop@11",
    LT_USERNAME: "nikita.rai",
    LT_ACCESS_KEY: "qVaFSwenjECjAbazFJJYK3iLZeSFKzbU0Ik1rsKsR327daxDdQ",
  },
});
