import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

let Dream = db.define('dreams', {
  userId: {
    type: Sequelize.INTEGER,
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