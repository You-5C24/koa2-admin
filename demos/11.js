/**
 * 错误处理
 * ctx.throw(500) 抛出500错误
 */
const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  ctx.throw(500);
};

app.use(main);

app.listen(3001);
