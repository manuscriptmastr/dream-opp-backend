import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

let typeDefs = `
type Opp {
  id: ID!
  title: String
  description: String
}
`;

let schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, preserveResolvers: true });

export default schema;