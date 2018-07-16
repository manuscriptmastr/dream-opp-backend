import { Opp } from '../model';

let typeDefs = `
type Opp {
  id: ID!
  description: String
  author: User
  bookmarked: Boolean!
  role: Role
  tools: [Tool]
  team: Team
}

input OppInput {
  bookmarked: Boolean!
}

extend type Query {
  opp(id: ID!): Opp
  opps(
    input: OppInput,
    limit: Int
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
    opps: (_, { input, limit }) => Opp.findAll({ where: input, limit })
  }
}

export default { typeDefs, resolvers };