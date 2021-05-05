const User = require('./User');
const Competency = require('./Competency');
const Training = require('./Training');
const Skill = require('./SkillLevel');
const Category = require('./Category');

User.hasMany(Competency, {
    foreignKey: 'user_id'
});

Skill.hasOne(Competency, {
    foreignKey: 'skill_id'
});

Training.hasOne(Competency, {
    foreignKey: 'training_id'
});

Category.hasMany(Training, {
    foreignKey: 'category_id'
});

module.exports = { User, Competency, Training, Skill, Category };
