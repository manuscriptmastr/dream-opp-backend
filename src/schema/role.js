import { makeExecutableSchema } from 'graphql-tools';
import { Role } from '../model';

let typeDefs = `
type Role {
  id: ID!
  title: String!
}

type Query {
  role(id: ID!): Role
  roles(userId: ID!): [Role]
}
`;

let resolvers = {
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: (_, { userId }) => Role.findAll({ where: { userId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;