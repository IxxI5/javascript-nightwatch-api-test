# Testing with JavaScript Nightwatch

Author: IxxI5

### Description

This repository demonstrates basic Nightwatch capabilities for testing a Web API, specifically the DummyJSON API (https://dummyjson.com). It showcases how to use the POST method to log in and obtain authentication tokens, which are then stored either in a global variable located in an external module (globals.js) to persist across test runs, or saved to a .json file. Additionally, it illustrates the use of the GET method to retrieve the details of the current authenticated user using the obtained tokens.

### Launch a Test

- **Unzip** the downloaded project from Github
- **Open** the project with VS Code
- **Install Dependencies** through Powershell Terminal:

  ```
  npm install
  ```

- **Run a Test**:

  ```javascript
  npx nightwatch tests/uc01.google.js
  ```

  OR

- **Run All Tests** under the tests folder:
  ```javascript
  npx nightwatch
  ```

### Create a Nightwatch Project Step by Step

- **Execute** the following npm command in VS Code Terminal (Command Prompt):

  ```javascript
  mkdir nightwatch-project

  cd nightwatch-project

  mkdir tests

  cd tests

  type nul > myTest1.js

  type nul > myTest2.js

  cd..

  type nul > .gitignore

  type nul > README.md

  npm init -y

  npm install nightwatch

  npm install chromedriver

  npx nightwatch --init
  ```

- **Axios** Dependency (non-mandatory) for testing Web APIs:

  ```
  npm install axios
  ```

- **Project Structure**

  ```
  nightwatch-project/
  ├── tests/
  │   ├── myTest1.js
  │   └── myTest2.js
  ├── package.json
  ├── nightwatch.config.js
  └── README.md
  ```

- **Modify** the nightwatch.conf.js as follows:

  ```javascript
  module.exports = {
    src_folders: ["tests"], // folder where tests are stored
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
  ```

- **Insert** the following code into myTest1.js:

  ```javascript
  // tests/myTest1.js

  module.exports = {
    "Basic Google site test": function (browser) {
      browser
        .url("https://www.google.com")
        .waitForElementVisible("body", 2000)
        .assert.titleContains("Google")
        .end();
    },
  };
  ```

- **Run** myTest1.js:

  ```javascript
  npx nightwatch tests/myTest.js
  ```

- **Insert** the following code into myTest2.js:

  ```javascript
  // tests/myTest2.js

  const axios = require("axios");

  module.exports = {
    "@tags": ["api"], // optional: tag for easier test categorization

    "Test GET /products": async function () {
      const response = await axios.get("https://dummyjson.com/products");

      // check if the status code is 200
      this.assert.equal(response.status, 200, "API responded with status 200");

      // check if the response contains a products array
      this.assert.ok(
        Array.isArray(response.data.products),
        "Response contains a products array"
      );
    },
  };
  ```

- **Run** myTest2.js:

  ```javascript
  npx nightwatch tests/myTest2.js
  ```

  OR

  ```javascript
  npx nightwatch --tag api
  ```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
