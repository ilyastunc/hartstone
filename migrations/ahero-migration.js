const { QueryInterface } = require("sequelize");
const { Sequelize } = require("../models");

module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Heros', {
        id: {
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),

    down: (queryInterface) => 
        queryInterface.dropTable('Heros'),
};