import { Role } from '../model';

let typeDefs = `
type Role {
  id: ID!
  title: String!
  author: User
  opps: [Opp]
}

extend type Query {
  role(id: ID!): Role
  roles(
    limit: Int,
    title: String
  ): [Role]
}
`;

let resolvers = {
  Role: {
    author: (role) => role.getUser(),
    opps: (role) => role.getOpps(),
  },
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: (_, { limit, ...args }) => Role.findAll({ where: { ...args }, limit })
  }
};

export default { typeDefs, resolvers };