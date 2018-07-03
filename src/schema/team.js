import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Team = db.define('team', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true
  },
  dreamId: {
    type: Sequelize.UUID,
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