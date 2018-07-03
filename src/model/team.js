import Sequelize from 'sequelize';
import db from '../db';

let model = db.define('team', {
  id: {
    type: Sequelize.UUID,
    field: 'id',
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  url: {
    type: Sequelize.STRING,
    field: 'url'
  }
});

export default model;