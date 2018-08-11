import { User } from '../model';
import { createToken } from '../library/authentication';

let typeDefs = `
type User {
  id: ID!
  username: String!
  email: String!
  firstName: String
  lastName: String
  opps: [Opp]
  roles: [Role]
  tools: [Tool]
  teams: [Team]
  token: String!
}

input UserInput {
  username: String!
  email: String!
  firstName: String
  lastName: String
}

extend type Query {
  currentUser(email: String!): User
  user(id: ID!): User
  users(
    input: UserInput,
    limit: Int
  ): [User]
}

extend type Mutation {
  createUser(input: UserInput!): User
}
`;

let resolvers = {
  User: {
    opps: (user) => user.getOpps(),
    roles: (user) => user.getRoles(),
    tools: (user) => user.getTools(),
    teams: (user) => user.getTeams(),
    token: (user) => createToken(user.id)
  },
  Query: {
    currentUser: (_, { email }) => User.findOne({ where: { email } }),
    user: (_, { id }) => User.findById(id),
    users: (_, { input, limit }) => User.findAll({ where: input, limit })
  },
  Mutation: {
    createUser: (_, { input }) => User.create(input)
  }
};

export default { typeDefs, resolvers };