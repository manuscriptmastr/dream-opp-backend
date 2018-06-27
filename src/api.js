import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import Router from 'koa-router';
import schema from './schema';
const api = new Router();

api.all('/graphql', graphqlKoa({ schema }));
api.all('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

export default api;