const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.baseUrl = "http://54.166.20.145:9080/desafioqa"
    },
  },
});
