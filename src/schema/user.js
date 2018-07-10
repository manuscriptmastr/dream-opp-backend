import { User } from '../model';

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
}

extend type Query {
  currentUser(email: String!): User
  user(id: ID!): User
  users(
    limit: Int,
    username: String,
    firstName: String,
    lastName: String
  ): [User]
}
`;

let resolvers = {
  User: {
    opps: (user) => user.getOpps(),
    roles: (user) => user.getRoles(),
    tools: (user) => user.getTools(),
    teams: (user) => user.getTeams()
  },
  Query: {
    currentUser: (_, { email }) => User.findOne({ where: { email } }),
    user: (_, { id }) => User.findById(id),
    users: (_, { limit, ...args }) => User.findAll({ where: { ...args }, limit })
  }
};

export default { typeDefs, resolvers };