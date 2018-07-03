import { makeExecutableSchema } from 'graphql-tools';
import { User } from '../model';

let typeDefs = `
type User {
  id: ID!
  username: String!
  email: String!
  firstName: String
  lastName: String
}

type Query {
  currentUser(email: String!): User
  user(id: ID!): User
  users(limit: Int): [User]
}
`;

let resolvers = {
  Query: {
    currentUser: (_, { email }) => User.findOne({ where: { email } }),
    user: (_, { id }) => User.findById(id),
    users: (_, { limit = 30 }) => User.findAll({ limit })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;