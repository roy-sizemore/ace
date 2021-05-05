const sequelize = require('../config/connection');
const { User, Skill, Training, Competency, Category } = require('../models');

const userData = require('./userData.json');
const compData = require('./compData.json');
const category = require('./category.json');
const skillData = require('./skillData.json');
const trainingData = require('./trainingData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Skill.bulkCreate(skillData);
    await Category.bulkCreate(category);
    await Training.bulkCreate(trainingData);
    await Competency.bulkCreate(compData);



    process.exit(0);
};

seedDatabase();