let resolvers = {
  Query: {
    currentUser() {
      return { id: 'sv099rgh', username: 'mellowyellow', email: 'me@me.com', firstName: 'Jason', lastName: 'Willard' };
    }
  }
};

export default resolvers;