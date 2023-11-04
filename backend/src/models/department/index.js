const { Sequelize } = require("sequelize");
const sequelize = require("../../config/dbConnection");
const Department = sequelize.define("department", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  manager: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  }
});

module.exports = Department;