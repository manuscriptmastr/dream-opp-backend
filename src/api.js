import { graphqlKoa } from 'apollo-server-koa';
import Router from 'koa-router';
import schema from './schema';
import { User } from './model';
const api = new Router();

api.all('/graphql',
  graphqlKoa(async (ctx) => {
    let { userId } = ctx.state.user;
    let user = await User.findById(userId);
    return {
      schema,
      context: {
        user
      }
    };
  })
);

export default api;