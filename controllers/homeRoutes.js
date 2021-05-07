const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/training', withAuth, async (req, res) => {
  const profile = await User.findAll({
    attributes: ['name', 'email', 'id']
  })
  res.render('trainer');
})

router.get('/competencies/:id', withAuth, (req, res) => {
  User.findByPk(req.params.id);
  res.render('trainee');
});

module.exports = router;
