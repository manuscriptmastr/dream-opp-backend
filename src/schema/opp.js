import { Opp } from '../model';

let typeDefs = `
type Opp {
  id: ID!
  title: String
  description: String
  author: User
  role: Role
  tools: [Tool]
  team: Team
}

extend type Query {
  opp(id: ID!): Opp
  opps(
    limit: Int,
    title: String
  ): [Opp]
}
`;

let resolvers = {
  Opp: {
    author: (opp) => opp.getUser(),
    role: (opp) => opp.getRole(),
    tools: (opp) => opp.getTools(),
    team: (opp) => opp.getTeam()
  },
  Query: {
    opp: (_, { id }) => Opp.findById(id),
    opps: (_, { limit, ...args }) => Opp.findAll({ where: { ...args }, limit })
  }
}

export default { typeDefs, resolvers };