const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
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
  env: {
    BASE_URL: "enter_valid_URL",
    TEST_USER_NAME: "enter_valid_username",
    TEST_USER_PASSWORD: "enter_valid_password",
    "LT_USERNAME": "nikita.rai",  // Your LambdaTest username
    "LT_ACCESS_KEY": "qVaFSwenjECjAbazFJJYK3iLZeSFKzbU0Ik1rsKsR327daxDdQ",  // Your LambdaTest access key
  },
});

