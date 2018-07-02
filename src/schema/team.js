import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

let Team = db.define('teams', {
  dreamId: {
    type: Sequelize.INTEGER,
    field: 'dream_id'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  url: {
    type: Sequelize.STRING,
    field: 'url'
  }
});

let typeDefs = `
type Team {
  id: ID!
  dreamId: ID!
  title: String
  url: String!
}

type Query {
  team(id: ID!): Team
  teams(dreamId: ID!): [Team]
}
`;

let resolvers = {
  Query: {
    team: (_, { id }) => Team.findById(id),
    teams: (_, { dreamId }) => Team.findAll({ where: { dreamId } })
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;