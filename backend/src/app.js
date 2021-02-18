const Koa = require('koa');

const cors = require('kcors');

const router = require('./router');

const app = new Koa();
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
