/**
 * 异步中间件
 */
const Koa = require("koa");
const fs = require("fs/promises");
const app = new Koa();

const main = async (ctx, next) => {
  ctx.response.type = "html";
  ctx.response.body = await fs.readFile("./demos/index.html", "utf8");
};

app.use(main);

app.listen(3001);
