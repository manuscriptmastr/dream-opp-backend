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
}

extend type Query {
  team(id: ID!): Team
  teams(
    input: TeamInput,
    limit: Int
  ): [Team]
}

extend type Mutation {
  createTeam(input: TeamInput!): Team
  updateTeam(input: TeamInput!, id: ID!): Team
  destroyTeam(id: ID!): Team
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
  },
  Mutation: {
    createTeam: (_, { input }) => Team.create(input),
    updateTeam: (_, { input, id }) => Team.findById(id)
      .then(team => team.update(input)),
    destroyTeam: (_, { id }) => Team.findById(id)
      .then(team => team.destroy().then(() => team))
  }
};

export default { typeDefs, resolvers };