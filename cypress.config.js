const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    charts: true,
    reportPageTitle: 'QA Report ' + Date.now(),
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    video: false,
    showSkipped: true,
    charts: true,
    quite: true,
    embeddedScreenshots: true,
    overwrite: true,
    toConsole: true,
  },
  e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },  
  },
});
