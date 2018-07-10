import { Team } from '../model';

let typeDefs = `
type Team {
  id: ID!
  title: String
  url: String!
  author: User
}

extend type Query {
  team(id: ID!): Team
  teams(
    limit: Int,
    title: String,
    url: String
  ): [Team]
}
`;

let resolvers = {
  Team: {
    author: (team) => team.getUser()
  },
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: (_, { limit, ...args }) => Team.findAll({ where: { ...args }, limit })
  }
};

export default { typeDefs, resolvers };