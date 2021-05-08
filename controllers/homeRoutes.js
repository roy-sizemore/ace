const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User} = require('../models');
// const {Competency} = require('../models');

// Login routes
router.get('/', (req, res) => {
  res.render('login')
})

router.get('/login', (req, res) => {
  res.render('login');
});

// Trainer routes
// Route to list all trainees
router.get('/training', withAuth, async (req, res) => {
  const profile = await User.findAll({
    attributes: ['name', 'email', 'id']
  });
  res.render('trainer');
})

// Route to select a single trainee
router.get('/competencies/:id', withAuth, async (req, res) => {
  const trainee = await User.findByPk(req.params.id);
  res.render('trainee');
});

// Trainee routes
// Trainee can view their training
router.get('/competencies', withAuth, async (req, res) => {
  const profile = await User.findByPk(req.params.id);
  res.render('trainee');
});

// POST route to add comments
router.post('/competencies', withAuth, (req, res) => {
  User.findAll({
      attributes: ['id'],
      include: [
          {
              model: User,
              attributes: ['id', 'name']
          }
      ]
  })
      .then(data => res.json(data))
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = router;
