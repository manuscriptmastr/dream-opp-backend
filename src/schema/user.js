import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

let typeDefs = `
type User {
  id: ID!
  username: String!
  email: String!
  firstName: String
  lastName: String
}

type Query {
  currentUser(id: ID!): User
}
`;

let resolvers = {
  Query: {
    currentUser: (_, { id }) => ({ id, firstName: 'Joshua', lastName: 'Martin' })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, preserveResolvers: true });

export default schema;