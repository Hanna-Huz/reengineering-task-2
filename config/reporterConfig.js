module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'mac-page-product-report',
    overwrite: true,
    html: true,
    json: true,
  },
};
