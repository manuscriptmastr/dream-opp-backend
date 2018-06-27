import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;