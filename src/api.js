import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import Router from 'koa-router';
import schema from './schema';
const api = new Router();

api.all('/graphql', graphqlKoa(({ state: { user } }) => ({ schema, context: user })));
api.all('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

export default api;