import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

let typeDefs = `
type Role {
  id: ID!
  dreamId: ID!
  title: String!
}
`;

let schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, preserveResolvers: true });

export default schema;