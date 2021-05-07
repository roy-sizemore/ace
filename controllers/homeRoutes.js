const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User} = require('../models');
const {Competency} = require('../../models');

// Login routes
router.get('/', (req, res) => {
    res.render('login')
  })

  router.get('/login', (req, res) => {
    res.render('login');
  });

// // Trainer routes
// // Route to list all trainees
// router.get('/training', withAuth, async (req, res) => {
//   const profile = await User.findAll({
//     attributes: ['name', 'email', 'id']
//   });
//   res.render('trainer');
// })

// // Route to select a single trainee
// router.get('/competencies/:id', withAuth, (req, res) => {
//   const trainee = User.findByPk(req.params.id);
//   res.render('trainee');
// });

// // Trainee routes - do we need if statements to separate roles?
// router.get('/competencies', withAuth, async (req, res) => {
//   console.log(req.session);
//   const profile = await User.findAll(req.session.id);
//   res.json(profile);
// });

// // TODO: Unfinished - POST to add comments
// router.post('/competencies', (req, res) => {
//   User.findAll()
// });

module.exports = router;
