const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Competency extends Model { }

Competency.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        comp_met: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        date_taken: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        skill_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'skill',
                key: 'id'
            },
        },
        training_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'training',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'competency',
    }
);

module.exports = Competency;