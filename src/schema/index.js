import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { typeDefs as userDefs, resolvers as userResolvers } from './user';
import { typeDefs as oppDefs, resolvers as oppResolvers } from './opp';
import { typeDefs as roleDefs, resolvers as roleResolvers } from './role';
import { typeDefs as toolDefs, resolvers as toolResolvers } from './tool';
import { typeDefs as teamDefs, resolvers as teamResolvers } from './team';

let baseDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

let schema = makeExecutableSchema({
  typeDefs: [
    baseDefs,
    userDefs,
    oppDefs,
    roleDefs,
    toolDefs,
    teamDefs
  ],
  resolvers: merge(
    userResolvers,
    oppResolvers,
    roleResolvers,
    toolResolvers,
    teamResolvers
  )
});

export default schema;