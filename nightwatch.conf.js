module.exports = {
  src_folders: ["tests"], // folder where tests are stored
  test_runner: {
    type: "default",
    options: {
      parallel: false, // disable parallel execution
    },
  },
  test_workers: false, // ensure tests are run sequentially
  globals: {
    myVariable: "", // placeholder for data that persist only for the current running test and not for cross tests
  },
  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
    port: 9515,
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
