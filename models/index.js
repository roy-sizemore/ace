const User = require('./User');
const Competency = require('./Competency');
const Training = require('./Training');
const Skill = require('./SkillLevel');

User.hasMany(Competency, {
    foreignKey: 'user_id'
});


// Shouldn't this belongsToMany? - notetoself: ask in office hours
// Competency.hasMany(User, {
//     foreignKey: 'user_id'
// });

Training.hasMany(Competency, {
    foreignKey: 'id'
});

Skill.belongsTo(Training, {
    through: Competency,
    foreignKey: 'id'
});

Training.hasMany(Skill, {
    foreignKey: 'id'
});

// Competency.hasMany(Training, {
//     foreignKey: 'id'
// });

module.exports = { User, Competency, Training, Skill };
