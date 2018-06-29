import { makeExecutableSchema } from 'graphql-tools';
import Sequelize from 'sequelize';
import db from '../db';

let User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    field: 'username'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
});

let typeDefs = `
type User {
  id: ID!
  username: String!
  email: String!
  firstName: String
  lastName: String
}

type Query {
  currentUser(email: String!): User
  allUsers: [User]
}
`;

let resolvers = {
  Query: {
    currentUser: (_, { email }) => User.findOne({ where: { email } }),
    allUsers: () => User.findAll()
  }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;