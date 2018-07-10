export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Model = sequelize.define('User', {
    id: {
      type: UUID,
      field: 'id',
      primaryKey: true,
      defaultValue: UUIDV4
    },
    username: {
      type: STRING,
      field: 'username'
    },
    email: {
      type: STRING,
      field: 'email'
    },
    firstName: {
      type: STRING,
      field: 'first_name'
    },
    lastName: {
      type: STRING,
      field: 'last_name'
    }
  });
  
  Model.associate = ({ Opp, Role, Tool, Team }) => {
    Model.hasMany(Opp);
    Model.hasMany(Role);
    Model.hasMany(Tool);
    Model.hasMany(Team);
  };

  return Model;
};