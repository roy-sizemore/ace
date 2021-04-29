const router = require('express').Router();
const routes = require('./aceRoutes');

router.use('/', routes);

module.exports = router;
