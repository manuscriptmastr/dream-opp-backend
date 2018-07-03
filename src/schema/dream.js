import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Dream = db.define('dream', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true
  },
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  }
});

let typeDefs = `
type Dream {
  id: ID!
  userId: ID!
}

type Query {
  dream(userId: ID!): Dream
}
`;

let resolvers = {
  Query: {
    dream: (_, { userId }) => Dream.findOne({ where: { userId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;