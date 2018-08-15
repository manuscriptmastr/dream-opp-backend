import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import base from './base';
import user from './user';
import opp from './opp';
import role from './role';
import tool from './tool';
import team from './team';
import directive, { directiveResolvers } from './directive';

let schemas = [
  base,
  directive,
  user,
  opp,
  role,
  tool,
  team
];

let typeDefs = schemas.map(({ typeDefs: t }) => t);
let resolvers = merge(...schemas.map(({ resolvers: r }) => r));
let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers
});

export default schema;