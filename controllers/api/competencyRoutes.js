const router = require('express').Router();
const { Competency, User } = require('../../models');
// const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    console.log(req.session);
    const profile = await User.findAll(req.session.id);
    res.json(profile);
});

// POST to add comments
router.post('/competencies', (req, res) => {
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
