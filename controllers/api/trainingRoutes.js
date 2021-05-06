const router = require('express').Router();
const { Training, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/competencies', (req, res) => {
    User.findAll()
});

// Do we need to have this route? Or do we need a JS file? Or both?
router.get('/', withAuth, async (req, res) => {
    const profile = await User.findAll(req.session.user_id);
    res.json(profile);
})

module.exports = router;
