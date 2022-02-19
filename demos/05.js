/**
 * 路由
 */
const Koa = require("koa");
const router = require("koa-route");
const fs = require("fs");
const app = new Koa();

const about = (ctx) => {
  ctx.response.type = "html";
  ctx.response.body = fs.createReadStream("./demos/about.html");
};

const main = (ctx) => {
  ctx.response.type = "html";
  ctx.response.body = fs.createReadStream("./demos/index.html");
};

app.use(router.get("/about", about));
app.use(router.get("/", main));

app.listen(3001);
