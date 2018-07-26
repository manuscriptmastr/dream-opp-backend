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

extend type Mutation {
  createTool(input: ToolInput!): Tool
  updateTool(input: ToolInput!, id: ID!): Tool
  destroyTool(id: ID!): Tool
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
  },
  Mutation: {
    createTool: (_, { input }) => Tool.create(input),
    updateTool: (_, { input, id }) => Tool.findById(id)
      .then(tool => tool.update(input)),
    destroyTool: (_, { id }) => Tool.findById(id)
      .then(tool => tool.destroy().then(() => tool))
  }
};

export default { typeDefs, resolvers };