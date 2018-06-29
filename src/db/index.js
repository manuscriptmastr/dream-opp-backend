import dotenv from 'dotenv';
dotenv.config();

import Sequelize from 'sequelize';

let { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const db = new Sequelize(
  DB_NAME,
  DB_USER,
  null,
  {
    host: DB_HOST,
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
);

export default db;