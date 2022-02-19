const router = require("koa-router")();

const api = router
  .get("/get/data.json", async (ctx) => {
    ctx.body = {
      success: true,
      data: {
        text: "hello node.",
      },
    };
  })
  .get("/get/user.json", async (ctx) => {
    ctx.body = {
      success: true,
      data: {
        text: "hello koa2, I am 5c24",
      },
    };
  });

module.exports = api;
