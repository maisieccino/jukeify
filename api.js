const Koa = require("koa");
const Router = require("koa-router");
const mount = require("koa-mount");
const Grant = require("grant-koa");
const { timer, logger, jsonify } = require("./middleware");

const app = new Koa();
const router = new Router();

const grant = new Grant({
  server: {
    protocol: process.env.PROTOCOL || "http",
    host: process.env.HOSTNAME || `localhost:${process.env.PORT || "3000"}`,
    callback: "/api/callback",
    path: "/api",
    transport: "session",
    state: true,
  },
  spotify: {
    key: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET,
    scope: [
      "streaming",
      "user-read-birthdate",
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
    ],
  },
});

router.use(timer);
router.use(logger);
router.use(jsonify);

app.use(mount(grant));

router.get("/callback", async ctx => {
  const token = ctx.session.grant.response.access_token || "";
  const success = token ? "true" : "false";
  const host =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
  console.log(process.env.NODE_ENV);
  ctx.redirect(`${host}/?token=${token}&success=${success}`);
});

router.get("/", async ctx => {
  ctx.body = "hello";
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
