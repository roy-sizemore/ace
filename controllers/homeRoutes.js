const router = require('express').Router();
const user = require('../seeds/userData.json');

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/api/user/:user_id', (req, res) => {
  return res.json(user.id);
})

module.exports = router;
