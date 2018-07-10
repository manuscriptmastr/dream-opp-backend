export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Model = sequelize.define('Role', {
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

  Model.associate = ({ User }) => {
    Model.belongsTo(User);
  };

  return Model;
};