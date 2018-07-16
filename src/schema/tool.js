import { Tool } from '../model';

let typeDefs = `
type Tool {
  id: ID!
  title: String!
  author: User
  opps: [Opp]
}

input ToolInput {
  title: String!
}

extend type Query {
  tool(id: ID!): Tool
  tools(
    input: ToolInput,
    limit: Int
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
    tools: (_, { input, limit }) => Tool.findAll({ where: input, limit })
  }
};

export default { typeDefs, resolvers };