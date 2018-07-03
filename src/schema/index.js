import { mergeSchemas } from 'graphql-tools';
import userSchema from './user';
import oppSchema from './opp';
import roleSchema from './role';
import toolSchema from './tool';
import teamSchema from './team';

let schema = mergeSchemas({
  schemas: [
    userSchema,
    oppSchema,
    roleSchema,
    toolSchema,
    teamSchema
  ]
});

export default schema;