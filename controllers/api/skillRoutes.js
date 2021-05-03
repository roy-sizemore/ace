const router = require('express').Router();
const { SkillLevel } = require('../../models');
const withAuth = require('../../utils/auth');

// all requests mounted on /api/skills

router.get('/', (req,res)=> {})

module.exports = router;
