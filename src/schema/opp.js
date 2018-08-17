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
  opp(id: ID!): Opp @isAuthenticated
}
`;

let resolvers = {
  Opp: {
    author: (opp) => opp.getUser(),
    role: (opp) => opp.getRole({ paranoid: false }),
    tools: (opp) => opp.getTools({ paranoid: false }),
    team: (opp) => opp.getTeam({ paranoid: false })
  },
  Query: {
    opp: (_, { id }) => Opp.findById(id)
  }
}

export default { typeDefs, resolvers };