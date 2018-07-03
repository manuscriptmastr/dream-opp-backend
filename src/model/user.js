import Sequelize from 'sequelize';
import db from '../db';

let model = db.define('user', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  username: {
    type: Sequelize.STRING,
    field: 'username'
  },
  email: {
    type: Sequelize.STRING,
    field: 'email'
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
});

export default model;