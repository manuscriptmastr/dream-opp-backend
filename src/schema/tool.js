import { Tool } from '../model';

let typeDefs = `
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

let resolvers = {
  Tool: {
    author: (tool) => tool.getUser()
  },
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: () => Tool.findAll()
  }
};

export default { typeDefs, resolvers };