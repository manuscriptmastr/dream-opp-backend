import { DataTypes } from 'sequelize';
import db from '../db';
import seed from './seed';
import user from './user';
import opp from './opp';
import role from './role';
import tool from './tool';
import team from './team';

let modelMakers = [ user, opp, role, tool, team ];

modelMakers.forEach(makeModel => {
  makeModel(db, DataTypes);
});

let models = db.models;

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

db.sync({ force: true }).then(() => seed(models));

export let { User, Opp, Role, Tool, Team } = models;