const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

// Establishes a connection to the MySQL database.
const dbConnection = new Sequelize({
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  dialectModule: mysql,
  port: process.MYSQL_PORT
});

module.exports = dbConnection;
