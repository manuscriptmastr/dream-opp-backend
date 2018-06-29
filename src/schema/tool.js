import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

let typeDefs = `
type Tool {
  id: ID!
  dreamId: ID!
  title: String!
}
`;

let schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, preserveResolvers: true });

export default schema;