const router = require('express').Router();
const routes = require('homeRoutes');

router.use('/', routes);

module.exports = router;
