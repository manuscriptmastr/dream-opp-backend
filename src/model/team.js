export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let Team = sequelize.define('Team', {
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
    url: {
      type: STRING,
      field: 'url'
    },
    imgUrl: {
      type: STRING,
      field: 'img_url'
    }
  });

  Team.associate = ({ User, Opp }) => {
    Team.belongsTo(User);
    Team.hasMany(Opp);
  };

  return Team;
};