const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const session = require("koa-session");

require("dotenv").config();

const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello";
});

app.listen(process.env.PORT || 3001);
