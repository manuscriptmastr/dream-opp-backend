import { User } from '../model';

let typeDefs = `
directive @isAuthenticated on FIELD
`;

export let directiveResolvers = {
  isAuthenticated: (next, _, __, { user }) => user instanceof User ? next() : null
};

export default { typeDefs };