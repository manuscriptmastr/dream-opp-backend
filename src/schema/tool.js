import { Tool } from '../model';

let typeDefs = `
type Tool {
  id: ID!
  title: String!
  author: User
}

extend type Query {
  tool(id: ID!): Tool
  tools(
    limit: Int,
    title: String
  ): [Tool]
}
`;

let resolvers = {
  Tool: {
    author: (tool) => tool.getUser()
  },
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: (_, { limit, ...args }) => Tool.findAll({ where: { ...args }, limit })
  }
};

export default { typeDefs, resolvers };