import { Role } from '../model';

export let typeDefs = `
type Role {
  id: ID!
  title: String!
  author: User
}

extend type Query {
  role(id: ID!): Role
  roles: [Role]
}
`;

export let resolvers = {
  Role: {
    author: (role) => role.getUser()
  },
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: () => Role.findAll()
  }
};