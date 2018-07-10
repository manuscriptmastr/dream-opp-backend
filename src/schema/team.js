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
  teams: [Team]
}
`;

let resolvers = {
  Team: {
    author: (team) => team.getUser()
  },
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: () => Team.findAll()
  }
};

export default { typeDefs, resolvers };