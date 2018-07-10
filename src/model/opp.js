export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Model = sequelize.define('Opp', {
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

  Model.associate = ({ User }) => {
    Model.belongsTo(User);
  };

  return Model;
};