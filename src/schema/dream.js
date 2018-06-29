import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

let typeDefs = `
type Dream {
  id: ID!
  userId: ID!
  roles: [Role]
  tools: [Tool]
  teams: [Team]
}
`;

let schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, preserveResolvers: true });

export default schema;