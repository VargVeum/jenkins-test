const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'QA Report ' + Date.now(),
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    video: false
  },
  e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },  
  },
});
