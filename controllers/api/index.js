const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const trainingRoutes = require('./trainingRoutes');
const competencyRoutes = require('./competencyRoutes');
const pdfRoutes = require('./pdfRoutes')

router.use('/users', userRoutes);
// router.use('/training', trainingRoutes);
router.use('/competencies', competencyRoutes);
router.use('/pdf', pdfRoutes);

module.exports = router;
