import dotenv from 'dotenv';
dotenv.config();

import { mapValues } from 'lodash';

export let authenticatedResolver = (resolver) =>
  (parent, args, context, info) => {
    if (context.user) {
      return resolver(parent, args, context, info);
    }
    throw new Error('User is not authenticated');
  };

export let authenticatedResolvers = (resolvers) => mapValues(resolvers, authenticatedResolver);