// May be legacy....

const router = require('express').Router();
const routes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', routes);

module.exports = router;
