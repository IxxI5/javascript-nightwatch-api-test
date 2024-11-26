const axios = require("axios");
const globals = require("./globals");
// const fs = require("fs");

module.exports = {
  "@tags": ["login"],

  "Login and store JWT": async function (browser) {
    const loginUrl = "https://dummyjson.com/auth/login";
    const credentials = {
      username: "emilys",
      password: "emilyspass",
    };

    // login: POST request
    const loginResponse = await axios.post(loginUrl, credentials);

    // store jwt token in globals
    globals.accessToken = loginResponse.data.accessToken;

    // validate response
    browser.assert.equal(
      loginResponse.status,
      200,
      "Login responded with status 200"
    );
    browser.assert.ok(
      loginResponse.data.accessToken,
      "Login response contains a token"
    );

    // store token in a temporary file
    // const token = loginResponse.data.token;
    // fs.writeFileSync("./tempToken.json", JSON.stringify({ token }), "utf8");

    // console.log("JWT stored in tempToken.json");
  },
};
