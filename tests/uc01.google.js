// tests/uc01.google.js

module.exports = {
  "Demo test Google": function (browser) {
    browser
      .url("https://www.google.com")
      .waitForElementVisible("body", 2000)
      .assert.titleContains("Google")
      .end();
  },
};
