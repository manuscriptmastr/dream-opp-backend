import { Tool } from '../model';

export let typeDefs = `
type Tool {
  id: ID!
  title: String!
  author: User
}

extend type Query {
  tool(id: ID!): Tool
  tools: [Tool]
}
`;

export let resolvers = {
  Tool: {
    author: (tool) => tool.getUser()
  },
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: () => Tool.findAll()
  }
};