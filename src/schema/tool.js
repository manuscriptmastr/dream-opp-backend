import { Tool } from '../model';

let typeDefs = `
type Tool {
  id: ID!
  title: String!
  author: User
  opps: [Opp]
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
    author: (tool) => tool.getUser(),
    opps: (tool) => tool.getOpps()
  },
  Query: {
    tool: (_, { id }) => Tool.findById(id),
    tools: (_, { limit, ...args }) => Tool.findAll({ where: { ...args }, limit })
  }
};

export default { typeDefs, resolvers };