let typeDefs = `
directive @isAuthenticated on FIELD
`;

export let directiveResolvers = {
  isAuthenticated: (next, parent, args, { user }) => {
    console.log('Authenticating...')
    console.log(user)
    if (user) {
      return next();
    }
    throw new Error('User is not authenticated');
  }
};

export default { typeDefs };