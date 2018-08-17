import { Role } from '../model';

let typeDefs = `
type Role {
  id: ID!
  title: String!
  author: User
  opps: [Opp]
}

input RoleInput {
  title: String!
}

extend type Query {
  role(id: ID!): Role @isAuthenticated
}

extend type Mutation {
  createRole(input: RoleInput!): Role @isAuthenticated
  updateRole(input: RoleInput!, id: ID!): Role @isAuthenticated
  destroyRole(id: ID!): Role @isAuthenticated
}
`;

let resolvers = {
  Role: {
    author: (role) => role.getUser(),
    opps: (role) => role.getOpps(),
  },
  Query: {
    role: (_, { id }) => Role.findById(id)
  },
  Mutation: {
    createRole: (_, { input }, { user }) => Role.create(input)
      .then(role => role.setUser(user)),
    updateRole: (_, { input, id }) => Role.findById(id)
      .then(role => role.update(input)),
    destroyRole: (_, { id }) => Role.findById(id)
      .then(role => role.destroy().then(() => role))
  }
};

export default { typeDefs, resolvers };