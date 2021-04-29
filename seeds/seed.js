const sequelize = require('../config/connection');
const { User, Comp, Areas } = require('../models');

const userData = require('./userData.json');
const compData = require('./compData.json');
const areaData = require('./areaData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    for (const comp of compData) {
        await Comp.create({
            ...comp,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();