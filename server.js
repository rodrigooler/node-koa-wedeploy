const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Worl2d  sadhasuhd';
});

app.listen(3000);
