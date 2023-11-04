const { Sequelize } = require("sequelize");
const sequelize = require('../../config/dbConnection');
const Department = require("../../models/department");
const Employee = sequelize.define('employees',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.ENUM(["Male", "Female"]),
        defaultValue: 'Male',
    },
    employee_code: {
        type: Sequelize.INTEGER,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    department: {
        type: Sequelize.INTEGER,
        references: { model: Department, key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    address_street: {
        type: Sequelize.STRING,
    },
    address_city: {
        type: Sequelize.STRING
    },
    address_province: {
        type: Sequelize.STRING
    },
    address_country: {
        type: Sequelize.STRING
    },
    address_postal_code: {
        type: Sequelize.INTEGER
    }
})
module.exports = Employee;
