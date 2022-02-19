/**
 * 中间件栈
 * 先进后出
 * 如果中间件内部没有调用next函数，那么执行权就不会传递下去
 */
const Koa = require("koa");
const app = new Koa();

const one = (ctx, next) => {
  console.log("> one");
  next();
  console.log("< one");
};

const two = (ctx, next) => {
  console.log("> two");
  next();
  console.log("< two");
};

const three = (ctx, next) => {
  console.log("> three");
  next();
  console.log("< three");
};

app.use(one);
app.use(two);
app.use(three);

app.listen(3001);
