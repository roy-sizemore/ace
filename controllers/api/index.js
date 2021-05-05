const router = require('express').Router();
const userRoutes = require('./userRoutes');
// May not need trainingRoutes (see legacy folder)
// const trainingRoutes = require('./trainingRoutes');
const competencyRoutes = require('./competencyRoutes');
// May not need skillRoutes (see legacy folder)
// const skillRoutes = require('./skillRoutes');

router.use('/users', userRoutes);
// router.use('/training', trainingRoutes);
router.use('/competencies', competencyRoutes);
// router.use('/skills', skillRoutes);

module.exports = router;
