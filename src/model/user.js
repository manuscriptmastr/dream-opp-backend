import { createToken, hashPassword, verifyPassword } from "../lib/auth";

export default (sequelize, { UUID, UUIDV4, STRING }) => {
  let User = sequelize.define('User', {
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
    password: {
      type: STRING,
      field: 'password'
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

  User.prototype.getToken = function () {
    return createToken(this.id);
  }

  User.prototype.verifyPassword = async function (password) {
    let isVerified = await verifyPassword(password, this.password);
    return isVerified ? this : null;
  }

  User.beforeCreate(async (user) => {
    let { password } = user;
    let hashed = await hashPassword(password);
    user.password = hashed;
  });
  
  User.associate = ({ Opp, Role, Tool, Team }) => {
    User.hasMany(Opp);
    User.hasMany(Role);
    User.hasMany(Tool);
    User.hasMany(Team);
  };
  
  return User;
};