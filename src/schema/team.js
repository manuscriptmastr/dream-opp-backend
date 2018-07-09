import { makeExecutableSchema } from 'graphql-tools';
import { Team } from '../db';

let typeDefs = `
type Team {
  id: ID!
  title: String
  url: String!
}

type Query {
  team(id: ID!): Team
  teams: [Team]
}
`;

let resolvers = {
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: () => Team.findAll()
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;