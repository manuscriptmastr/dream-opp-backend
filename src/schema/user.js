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
    token: (user) => user.getToken()
  },
  Query: {
    currentUser: (_, { email }, { userId }) =>
      email ?
      User.findOne({ where: { email } })
        :
      User.findById(userId)
  },
  Mutation: {
    createUser: (_, { input }) => User.create(input)
  }
};

export default { typeDefs, resolvers };