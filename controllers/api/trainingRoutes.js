const router = require('express').Router();
const {User} = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     const profile = await User.findAll(req.session.id);
//     res.render('trainer');
// })

// router.get('/competencies', (req, res) => {
//     const trainee = User.findByPk(req.params.id);
//     res.render('trainee');
// });

module.exports = router;
