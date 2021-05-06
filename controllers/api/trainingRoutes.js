const router = require('express').Router();
const { Training, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/competencies', (req, res) => {
    User.findAll()
});

router.get('/', withAuth, async (req, res) => {
    const profile = await User.findAll(req.session.id);
    res.json(profile);
})

module.exports = router;
