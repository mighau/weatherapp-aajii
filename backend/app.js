const Koa = require('koa');

const cors = require('kcors');

const router = require('./utils/router');

const app = new Koa();
app.use(cors());
app.use(require('koa-static')('./build', 'index'));

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
