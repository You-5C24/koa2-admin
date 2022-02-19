/**
 * 中间件合成
 */
const Koa = require("koa");
const compose = require("koa-compose");
const app = new Koa();

const logger = (ctx, next) => {
  const { url, method } = ctx;
  console.log(`${Date.now()}  ${url}  ${method}`);
  next();
  console.log("嘿嘿嘿");
};

const main = (ctx) => {
  ctx.response.body = "hello node";
  console.log("哈哈哈");
};

const middlewares = compose([logger, main]);

app.use(middlewares);

app.listen(3001);
