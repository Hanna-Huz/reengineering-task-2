const { defineConfig } = require('cypress');
const reporterConfig = require('./config/reporterConfig');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.apple.com/mac',
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1440,
    viewportHeight: 800,
    reporter: reporterConfig.reporter,
    reporterOptions: reporterConfig.reporterOptions,
  },
});
