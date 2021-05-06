const router = require('express').Router();
const { Training, User } = require('../../models');

router.post('/competencies', (req, res) => {
    User.findAll()
});

// Do we need to have this route? Or do we need a JS file? Or both?
router.get('/', (req, res) => {
    User.findAll(user.id);
});

module.exports = router;
