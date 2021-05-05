const User = require('./User');
const Competency = require('./Competency');
const Category = require('./Category');
const Training = require('./Training');
const Skill = require('./SkillLevel');

User.hasMany(Competency, {
    foreignKey: 'user_id'
});

Category.hasMany(Training, {
    foreignKey: 'category_id'
});

Skill.hasOne(Competency, {
    foreignKey: 'skill_id'
});

Training.hasOne(Competency, {
    foreignKey: 'training_id'
});



module.exports = { User, Competency, Training, Skill, Category };
