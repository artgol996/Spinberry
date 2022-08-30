module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

//npx const { defineConfig } = require("cypress");

//module.exports = defineConfig({
//reporter: "cypress-mochawesome-reporter",

//reporterOptions: {
//reportDir: "cypress/results",
//charts:true,
//reportPageTitle:"Revved Wilds Report",
//embeddedScreenshots:true

//},

//e2e: {
//setupNodeEvents(on, config) {
// implement node event listeners here
//},
//},

//});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    configFile: "reporter-config.json",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
