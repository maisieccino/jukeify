const Koa = require("koa");
const Router = require("koa-router");
const { timer, logger, jsonify } = require("./middleware");

const app = new Koa();
const router = new Router();

router.use(timer);
router.use(logger);
router.use(jsonify);

router.get("/", async ctx => {
  ctx.body = "hello";
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
