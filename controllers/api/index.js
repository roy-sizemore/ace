const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const trainingRoutes = require('./trainingRoutes');
const competencyRoutes = require('./competencyRoutes');

router.use('/users', userRoutes);
// router.use('/training', trainingRoutes);
router.use('/competencies', competencyRoutes);

module.exports = router;
