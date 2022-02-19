/**
 * 让最外层的中间件负责所有中间件的错误处理， 用 try...catch 捕获处理
 */
const Koa = require("koa");
const compose = require("koa-compose");
const app = new Koa();

const handle = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.status = error.statusCode || error.status || 500;
    ctx.response.body = {
      message: error.message,
    };
  }
};

const main = (ctx) => {
  ctx.throw(500);
};

const middlewares = compose([handle, main]);

app.use(middlewares);

app.listen(3001);
