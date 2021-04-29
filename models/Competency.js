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
        completed: {
            isTaken: true
        },
        verified: {
            isVerified: true
        },
        comp_met: {
            isMet: true
        },
        comment: {
            type: Datatypes.TEXT,
            allowNull: true
        },
        date_taken: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
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