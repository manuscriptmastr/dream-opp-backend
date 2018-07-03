import { makeExecutableSchema } from 'graphql-tools';
import { Team } from '../model';

let typeDefs = `
type Team {
  id: ID!
  title: String
  url: String!
}

type Query {
  team(id: ID!): Team
  teams(userId: ID!): [Team]
}
`;

let resolvers = {
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: (_, { userId }) => Team.findAll({ where: { userId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;