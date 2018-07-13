export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Opp = sequelize.define('Opp', {
    id: {
      type: UUID,
      field: 'id',
      primaryKey: true,
      defaultValue: UUIDV4
    },
    title: {
      type: STRING,
      field: 'title'
    },
    description: {
      type: STRING,
      field: 'description'
    }
  });

  Opp.associate = ({ User, Role, Tool, Team }) => {
    Opp.belongsTo(User);
    Opp.belongsTo(Role);
    Opp.hasMany(Tool);
    Opp.belongsTo(Team);
  };

  return Opp;
};