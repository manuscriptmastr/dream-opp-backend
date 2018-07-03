import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Role = db.define('role', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true
  },
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  }
});

let typeDefs = `
type Role {
  id: ID!
  userId: ID!
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