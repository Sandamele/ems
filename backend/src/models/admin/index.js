const { Sequelize } = require("sequelize");
const sequelize = require("../../config/dbConnection");
const Admin = sequelize.define("admins", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
  roles: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  passwords: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  refresh_token: {
    type: Sequelize.TEXT,
  }
});

(async () => {
    await sequelize.sync();
})();

module.exports = Admin;
