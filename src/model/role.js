import Sequelize from 'sequelize';
import db from '../db';

let model = db.define('role', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  }
});

export default model;