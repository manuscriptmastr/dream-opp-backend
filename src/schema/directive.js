let typeDefs = `
directive @isAuthenticated on FIELD
`;

export let directiveResolvers = {
  isAuthenticated: (next, _, __, { user }) => {
    if (user) {
      return next();
    }
    throw new Error('User is not authenticated');
  }
};

export default { typeDefs };