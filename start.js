/* eslint no-console: 0 */
const childProcess = require("child_process");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function main() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    console.log("starting production build...");
    const { stdout } = await exec("NODE_ENV=production cd app && yarn build");
    console.log(stdout);

    await new Promise(res => {
      const server = childProcess.spawn("node", ["server.js"]);
      server.stdout.on("data", data => console.log(data.toString()));
      server.stderr.on("data", data =>
        console.error(`Error: ${data.toString()}`),
      );
      server.on("close", res);
    });
  } else {
    // start the react server, and the main server (with nodemon)
    console.log("Starting dev servers...");
    const serverProcess = "NODE_ENV=development yarn run nodemon ./server.js";
    const appProcess = "cd app && yarn start";
    await new Promise(res => {
      const server = childProcess.spawn("yarn", [
        "run",
        "concurrently",
        serverProcess,
        appProcess,
      ]);
      server.stdout.on("data", data => console.log(data.toString()));
      server.stderr.on("data", data =>
        console.error(`Error: ${data.toString()}`),
      );
      server.on("close", res);
    });
  }
}

main()
  .catch(err => {
    console.error(err);
    process.exit(127);
  })
  .then(() => {
    process.exit(0);
  });
