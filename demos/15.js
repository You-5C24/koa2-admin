/**
 * 释放 error 事件
 * 错误被 try...catch 捕获需要调用 ctx.app.emit() 手动释放 error 事件，才能让监听函数生效
 */
const Koa = require("koa");
const compose = require("koa-compose");
const app = new Koa();

const handle = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.status = error.statusCode || error.status || 500;
    ctx.response.type = "html";
    ctx.response.body = "<h1>Something wrong...</h1>";
    ctx.app.emit("error", err, ctx);
  }
};

const main = (ctx) => {
  ctx.throw(500);
};

const middlewares = compose([handle, main]);

app.on("error", (err) => {
  console.log("logger error", err.message);
  console.log(err, 888);
});

app.use(middlewares);
app.listen(3001);
