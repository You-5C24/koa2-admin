const router = require("koa-router")();

const page = router
  .get("/404", async (ctx) => {
    ctx.body = "404 page.";
  })
  .get("/helloworld", async (ctx) => {
    ctx.body = "hello world page.";
  });

module.exports = page;
