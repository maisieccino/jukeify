/* eslint no-console: 0 */
const childProcess = require("child_process");

if (process.env.NODE_ENV === "production") {
  try {
    childProcess.execSync("NODE_ENV=production cd app && yarn build");
  } catch (err) {
    console.log("Looks like there was an error building the app.");
    process.exit(1);
  }
  childProcess.execSync("node server.js");
} else {
  // start the react server, and the main server (with nodemon)
  console.log("Starting dev servers...");
  const serverProcess = "yarn run nodemon ./server.js";
  const appProcess = "cd app && yarn start";
  childProcess.execSync(
    `yarn run concurrently "${serverProcess}" "${appProcess}"`,
  );
}
