const router = require('express').Router();
const user = require('../seeds/userData.json');
const apiRoutes = require('/api');

router.get('/api', (req, res) => {
  return res.json(apiRoutes);
})
  .catch((err) => res.status(500).json(err));

router.post('user', (req, res) => {
  return res.json(user);
})
  .catch((err) => res.status(500).json(err));

module.exports = router;
