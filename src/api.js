import { graphqlKoa } from 'apollo-server-koa';
import Router from 'koa-router';
import schema from './schema';
const api = new Router();

api.all('/graphql',
  graphqlKoa((ctx) => ({
    schema,
    context: ctx.state
  }))
);

export default api;