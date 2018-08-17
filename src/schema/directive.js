let typeDefs = `
directive @isAuthenticated on FIELD
`;

export let directiveResolvers = {
  isAuthenticated: (next, _, __, { user }) => user ? next() : null
};

export default { typeDefs };