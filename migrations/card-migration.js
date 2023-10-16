const { QueryInterface } = require("sequelize");
const { Sequelize } = require("../models");

module.exports = {
    up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Cards', {
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
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        attack: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        health: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 3,
        },
        spell: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        heroId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'Heros',
                key: 'id',
                as: 'heroId',
            },
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
        queryInterface.dropTable('Cards'),
};