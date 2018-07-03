import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Role = db.define('role', {
  dreamId: {
    type: Sequelize.INTEGER,
    field: 'dream_id'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  }
});

let typeDefs = `
type Role {
  id: ID!
  dreamId: ID!
  title: String!
}

type Query {
  role(id: ID!): Role
  roles(dreamId: ID!): [Role]
}
`;

let resolvers = {
  Query: {
    role: (_, { id }) => Role.findById(id),
    roles: (_, { dreamId }) => Role.findAll({ where: { dreamId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;