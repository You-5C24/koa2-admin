/**
 * Context 对象
 * 表示一次对话的上下文(包括 HTTP 请求喝 HTTP 回复)
 */
const Koa = require("koa");
const app = new Koa();

const main = (ctx) => {
  ctx.response.body = "hello koa2";
};

app.use(main);

app.listen(3001);
