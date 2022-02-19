/**
 * 静态资源
 */
const Koa = require("koa");
const path = require("path");
const serve = require("koa-static");
const app = new Koa();

console.log(path.join(__dirname));

const main = serve(path.join(__dirname));

app.use(main);

app.listen(3001);
