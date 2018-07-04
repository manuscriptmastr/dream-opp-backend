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

db.sync({ force: true }).then(async() => {

  let josh = await User.create({
    username: 'manuscriptmaster',
    email: 'the.manuscriptmaster@gmail.com',
    firstName: 'Joshua',
    lastName: 'Martin'
  });

  let jon = await User.create({
    username: 'nybblr',
    email: 'the.nybblr@gmail.com',
    firstName: 'Jonathan',
    lastName: 'Martin'
  });

  let opp1 = await Opp.create({
    title: 'Opp 1',
    description: 'This is an opp.'
  });

  let opp2 = await Opp.create({
    title: 'Opp 2',
    description: 'This is another opp.'
  });

  let role1 = await Role.create({
    title: 'Role 1'
  });

  let role2 = await Role.create({
    title: 'Role 2'
  });

  let tool1 = await Tool.create({
    title: 'Tool 1'
  });

  let tool2 = await Tool.create({
    title: 'Tool 1'
  });

  let team1 = await Team.create({
    title: 'Team 1'
  });

  let team2 = await Team.create({
    title: 'Team 2'
  });

});

export { User, Opp, Role, Tool, Team };