import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

export let Opp = db.define('opp', {
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  description: {
    type: Sequelize.STRING,
    field: 'description'
  }
});

let typeDefs = `
type Opp {
  id: ID!
  title: String
  description: String
}

type Query {
  opp(id: ID!): Opp
  opps(limit: Int): [Opp]
}
`;

let resolvers = {
  Query: {
    opp: (_, { id }) => Opp.findById(id),
    opps: (_, { limit = 30 }) => Opp.findAll({ limit })
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;