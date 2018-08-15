import { graphqlKoa } from 'apollo-server-koa';
import Router from 'koa-router';
import schema from './schema';
const api = new Router();

api.all('/graphql', graphqlKoa(({ state: { user } }) => ({ schema, context: { user } })));

export default api;