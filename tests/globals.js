// By default, globals in Nightwatch are not shared between test files because each test runs in isolation unless explicitly configured otherwise. When a test file sets a value in browser.globals, it exists only for that specific test execution and does not persist across other test runs.

// Use an external Node.js module to persist globals between test runs.
module.exports = {
  accessToken: null, // Initialize the token as null
};

// example: globals.accessToken = loginResponse.data.accessToken
