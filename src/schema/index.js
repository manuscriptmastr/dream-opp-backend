import { mergeSchemas } from 'graphql-tools';
import userSchema from './user';
import oppSchema from './opp';
import dreamSchema from './dream';
import roleSchema from './role';
import toolSchema from './tool';
import teamSchema from './team';

let schema = mergeSchemas({
  schemas: [
    userSchema,
    oppSchema,
    dreamSchema,
    roleSchema,
    toolSchema,
    teamSchema
  ]
});

export default schema;