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
  tool(id: ID!): Tool @isAuthenticated
}

extend type Mutation {
  createTool(input: ToolInput!): Tool @isAuthenticated
  updateTool(input: ToolInput!, id: ID!): Tool @isAuthenticated
  destroyTool(id: ID!): Tool @isAuthenticated
}
`;

let resolvers = {
  Tool: {
    author: (tool) => tool.getUser(),
    opps: (tool) => tool.getOpps()
  },
  Query: {
    tool: (_, { id }) => Tool.findById(id)
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