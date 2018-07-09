import dotenv from 'dotenv';
dotenv.config();

import Sequelize, { DataTypes } from 'sequelize';
import * as models from './model';

let { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const db = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    define: {
      underscored: true,
      timestamps: false,
      freezeTableName: true
    }
  },
);

Object.values(models).forEach((model) => model(db, DataTypes));

db.sync();

export let { User, Opp, Role, Tool, Team } = db.models;