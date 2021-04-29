const router = require('express').Router();
const homeRoutes = require('homeRoutes');
const apiRoutes = require('api');

router.get('[*****FILEPATH NEEDED*****]', (req, res) => {
  return res.json(compData);
})
  .catch((err) => res.status(500).json(err));

router.get('[*****FILEPATH NEEDED*****', (req, res) => {
  return res.json(trainingData);
})
  .catch((err) => res.status(500).json(err));

router.post('/api', (req, res) => {
  return res.json(user);
})
  .catch((err) => res.status(500).json(err));

module.exports = router;
