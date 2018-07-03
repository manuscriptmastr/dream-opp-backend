import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Tool = db.define('tool', {
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
type Tool {
  id: ID!
  dreamId: ID!
  title: String!
}

type Query {
  tool(id: ID!): Tool
  tools(dreamId: ID!): [Tool]
}
`;

let resolvers = {
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: (_, { dreamId }) => Tool.findAll({ where: { dreamId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;