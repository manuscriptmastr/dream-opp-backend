import { User } from '../model';

export let typeDefs = `
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
}

extend type Query {
  currentUser(email: String!): User
  user(id: ID!): User
  users(limit: Int): [User]
}
`;

export let resolvers = {
  User: {
    opps: (user) => user.getOpps(),
    roles: (user) => user.getRoles(),
    tools: (user) => user.getTools(),
    teams: (user) => user.getTeams()
  },
  Query: {
    currentUser: (_, { email }) => User.findOne({ where: { email } }),
    user: (_, { id }) => User.findById(id),
    users: (_, { limit = 30 }) => User.findAll({ limit })
  }
};