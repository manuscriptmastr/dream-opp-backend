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

  Opp.associate = ({ User }) => {
    Opp.belongsTo(User);
  };

  return Opp;
};