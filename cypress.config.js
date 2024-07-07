const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")
async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/pliugin')(on);
  on("file:preprocessor", browserify.define(config));
  return config;
}

module.exports = defineConfig({
  projectId: 'g4t57g',
  defaultCommandTimeout:6000,
  // chromeWebSecurity:false,
  // video:true,
  // screenshotOnRunFailure:true,
  // projectId: "c7ndp9",
  // retries: {
  //   // Configure retry attempts for `cypress run`
  //   // Default is 0
  //   runMode: 2,
  //   // Configure retry attempts for `cypress open`
  //   // Default is 0
  //   openMode: 2
  // },
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on,config){
    require('cypress-mochawesome-reporter/plugin')(on);
      specPattern: 'cypress/e2e/BDD/*.feature'
      // implement node event listeners here
    }
    },
});
