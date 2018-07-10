import { makeExecutableSchema } from 'graphql-tools';
import { Opp } from '../model';

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