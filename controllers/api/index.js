const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trainingRoutes = require('./trainingRoutes');
const competencyRoutes = require('./competencyRoutes');
const skillRoutes = require('./skillRoutes');

router.use('/users', userRoutes);
router.use('/training', trainingRoutes);
router.use('/competencies', competencyRoutes);
router.use('/skills', skillRoutes);

module.exports = router;
