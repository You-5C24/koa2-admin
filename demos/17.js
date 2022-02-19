/**
 * koa-body 用于从 POST 请求的数据体里面提取键值对
 */
const Koa = require("koa");
const KoaBody = require("koa-body");
const compose = require("koa-compose");
const app = new Koa();

const main = (ctx, next) => {
  const body = ctx.request.body;
  if (!body.name) {
    ctx.throw(400, "name required");
  }
  ctx.body = { name: body.name };
};

const middlewares = compose([KoaBody(), main]);

app.use(middlewares);

app.listen(3001);
