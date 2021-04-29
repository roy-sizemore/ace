const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model { }

Skill.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skill_level: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'skill',
    }
);

module.exports = Skill;