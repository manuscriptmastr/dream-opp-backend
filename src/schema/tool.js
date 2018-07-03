import { makeExecutableSchema } from 'graphql-tools';
import { Tool } from '../model';

let typeDefs = `
type Tool {
  id: ID!
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