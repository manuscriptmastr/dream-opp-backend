import Router from 'koa-router';
const api = new Router();

api.get('/', ctx => {
  ctx.body = 'Hello world!';
});

export default api;