import { makeExecutableSchema } from 'graphql-tools';
import { Role } from '../model';

let typeDefs = `
type Role {
  id: ID!
  title: String!
}

type Query {
  role(id: ID!): Role
  roles: [Role]
}
`;

let resolvers = {
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: () => Role.findAll()
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;