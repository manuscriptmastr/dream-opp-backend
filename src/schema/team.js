import { Team } from '../model';

let typeDefs = `
type Team {
  id: ID!
  title: String!
  url: String!
  imgUrl: String
  author: User
  opps: [Opp]
}

input TeamInput {
  title: String!
  url: String!
  imgUrl: String
}

extend type Query {
  team(id: ID!): Team
  teams(
    input: TeamInput!,
    limit: Int
  ): [Team]
}
`;

let resolvers = {
  Team: {
    author: (team) => team.getUser(),
    opps: (team) => team.getOpps()
  },
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: (_, { input, limit }) => Team.findAll({ where: input, limit })
  }
};

export default { typeDefs, resolvers };