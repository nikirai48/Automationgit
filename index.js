// server.js
const { initPlugin } = require("@lambdatest/cypress-plugin");

module.exports = (on, config) => {
    on('before:run', (details) => {
      // Setup LambdaTest capabilities before running the tests
      config.env.LT_USERNAME = process.env.LT_USERNAME;
      config.env.LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;
  
      config.env.LT_BROWSERS = [
        { browser: 'chrome', version: '91.0', platform: 'Windows 10' },
        { browser: 'firefox', version: '89.0', platform: 'macOS' },
      ];
  
      return config;
    });
  };
  