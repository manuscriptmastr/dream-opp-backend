let resolvers = {
  Query: {
    currentUser: (_, { id }) => ({ id, username: 'mellowyellow', email: 'me@me.com', firstName: 'Jason', lastName: 'Willard' })
  }
};

export default resolvers;