const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const session = require("koa-session");
const mount = require("koa-mount");
const serve = require("koa-static");

require("dotenv").config();

const app = new Koa();

app.keys = [process.env.SECRET || "secret"];
app.use(session({}, app));

app.use(bodyparser());
app.use(mount("/api", require("./api")));

app.use(serve(`${__dirname}/app/build`));

app.listen(process.env.PORT || 3001);
