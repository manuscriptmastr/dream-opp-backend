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
  password: String!
  firstName: String
  lastName: String
}

input LoginInput {
  email: String!
  password: String!
}

extend type Query {
  currentUser: User @isAuthenticated
}

extend type Mutation {
  createUser(input: UserInput!): User
  loginUser(input: LoginInput!): User
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
    currentUser: (_, __, { user: { id } }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { input }) => User.create(input),
    loginUser: (_, { input: { email, password } }) =>
      User.findOne({ where: { email } })
        .then(user => user ? user.verifyPassword(password): null)
  }
};

export default { typeDefs, resolvers };