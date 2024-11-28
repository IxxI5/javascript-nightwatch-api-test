// tests/uc03.auth.js

const axios = require("axios");
const globals = require("./globals");
// const fs = require("fs");

module.exports = {
  "@tags": ["auth"],

  "Get authenticated user": async function (browser) {
    const userUrl = "https://dummyjson.com/auth/user";

    // access the jwt token from Nightwatch globals
    const token = globals.accessToken;

    // read the token from the temporary file
    // const tokenData = JSON.parse(fs.readFileSync("./tempToken.json", "utf8"));
    // const token = tokenData.token;

    browser.assert.ok(token, "JWT token is available");

    // Fetch authenticated user
    const userResponse = await axios.get(userUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Validate response
    browser.assert.equal(
      userResponse.status,
      200,
      "Authenticated user fetch responded with status 200"
    );
    browser.assert.equal(
      userResponse.data.users[0].username,
      "emilys",
      "Authenticated user has the correct username"
    );
    browser.assert.ok(
      userResponse.data.users[0].email,
      "Authenticated user has an email"
    );
    browser.assert.ok(
      userResponse.data.users[0].id,
      "Authenticated user has an ID"
    );
  },
};
