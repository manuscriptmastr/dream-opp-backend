export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Role = sequelize.define('Role', {
    id: {
      type: UUID,
      field: 'id',
      primaryKey: true,
      defaultValue: UUIDV4
    },
    title: {
      type: STRING,
      field: 'title'
    }
  });

  Role.associate = ({ User, Opp }) => {
    Role.belongsTo(User);
    Role.hasMany(Opp);
  };

  return Role;
};