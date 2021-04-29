const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Training extends Model { }

Training.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        training_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'training',
    }
);

module.exports = Training;