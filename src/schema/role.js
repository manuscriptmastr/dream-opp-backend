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
  role(id: ID!): Role
  roles(
    input: RoleInput,
    limit: Int
  ): [Role]
}

extend type Mutation {
  createRole(input: RoleInput!): Role
  updateRole(input: RoleInput!, id: ID!): Role
  destroyRole(id: ID!): Role
}
`;

let resolvers = {
  Role: {
    author: (role) => role.getUser(),
    opps: (role) => role.getOpps(),
  },
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: (_, { input, limit }) => Role.findAll({ where: input, limit })
  },
  Mutation: {
    createRole: (_, { input }) => Role.create(input),
    updateRole: (_, { input, id }) => Role.findById(id)
      .then(role => role.update(input)),
    destroyRole: (_, { id }) => Role.findById(id)
      .then(role => { role.destroy(); return role; })
  }
};

export default { typeDefs, resolvers };