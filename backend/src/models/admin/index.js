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
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  roles: {
    type: Sequelize.ENUM(["Super Admin", "Admin"]),
    allowNull: false,
    
  },
  passwords: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  refresh_token: {
    type: Sequelize.TEXT,
  }
});

module.exports = Admin;
