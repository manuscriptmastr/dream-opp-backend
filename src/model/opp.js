export default (sequelize, { UUID, UUIDV4, TEXT, BOOLEAN }) => {
  let Opp = sequelize.define('Opp', {
    id: {
      type: UUID,
      field: 'id',
      primaryKey: true,
      defaultValue: UUIDV4
    },
    description: {
      type: TEXT,
      field: 'description'
    },
    bookmarked: {
      type: BOOLEAN,
      field: 'bookmarked',
      defaultValue: false
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