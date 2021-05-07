const router = require('express').Router();
const { Competency } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    console.log(req.session);
    const profile = await User.findAll(req.session.id);
    res.json(profile);
});

router.post('/competencies', (req, res) => {
    User.findAll()
});


module.exports = router;
