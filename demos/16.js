/**
 * cookie 读写
 */
const Koa = require("koa");
const app = new Koa();

const main = (ctx, next) => {
  const view = Number(ctx.cookies.get("view") || 0) + 1;
  ctx.cookies.set("view", view);
  ctx.response.body = `${view} view`;
};

app.use(main);

app.listen(3001);
