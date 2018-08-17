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
  team(id: ID!): Team @isAuthenticated
}

extend type Mutation {
  createTeam(input: TeamInput!): Team @isAuthenticated
  updateTeam(input: TeamInput!, id: ID!): Team @isAuthenticated
  destroyTeam(id: ID!): Team @isAuthenticated
}
`;

let resolvers = {
  Team: {
    author: (team) => team.getUser(),
    opps: (team) => team.getOpps()
  },
  Query: {
    team: (_, { id }) => Team.findById(id)
  },
  Mutation: {
    createTeam: (_, { input }, { user }) => Team.create(input)
      .then(team => team.setUser(user)),
    updateTeam: (_, { input, id }) => Team.findById(id)
      .then(team => team.update(input)),
    destroyTeam: (_, { id }) => Team.findById(id)
      .then(team => team.destroy().then(() => team))
  }
};

export default { typeDefs, resolvers };