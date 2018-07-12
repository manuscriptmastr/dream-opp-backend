export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Tool = sequelize.define('Tool', {
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

  Tool.associate = ({ User }) => {
    Tool.belongsTo(User);
  };

  return Tool;
};