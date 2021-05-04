const User = require('./User');
const Competency = require('./Competency');
const Training = require('./Training');
const Skill = require('./SkillLevel');

User.hasMany(Competency, {
    foreignKey: 'user_id'
});

Skill.hasOne(Competency, {
    foreignKey: 'skill_id'
});

Training.hasOne(Competency, {
    foreignKey: 'training_id'
});

// Training.hasMany(Competency, {
//     foreignKey: 'id'
// });

// Skill.belongsTo(Competency, {
//     through: Competency,
//     foreignKey: 'skill_id'
// });

// Training.hasMany(Skill, {
//     foreignKey: 'id'
// });

module.exports = { User, Competency, Training, Skill };
