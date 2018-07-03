import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Tool = db.define('tool', {
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
type Tool {
  id: ID!
  userId: ID!
  title: String!
}

type Query {
  tool(id: ID!): Tool
  tools(userId: ID!): [Tool]
}
`;

let resolvers = {
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: (_, { userId }) => Tool.findAll({ where: { userId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;