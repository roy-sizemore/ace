const sequelize = require('../config/connection');
const { User, Comp, Skill, Training } = require('../models');

const userData = require('./userData.json');
const compData = require('./compData.json');
const skillData = require('./skillData.json');
const trainingData = require('./trainingData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    for (const comp of compData) {
        const newComp = await Comp.create({
            ...comp,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();