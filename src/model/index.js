import db from '../db';

import User from './user';
import Opp from './opp';
import Role from './role';
import Tool from './tool';
import Team from './team';

User.hasMany(Opp);
User.hasMany(Role);
User.hasMany(Tool);
User.hasMany(Team);

Opp.belongsTo(User);
Role.belongsTo(User);
Tool.belongsTo(User);
Team.belongsTo(User);

db.sync({ force: true });

export { User, Opp, Role, Tool, Team };