const router = require('express').Router();
const user = require('../seeds/userData.json');

//WHAT DO WE WANT TO DO


router.get('/', (req,res)=> {
  res.render('login')
})

router.post('/api/user/:user_id', (req, res) => {
  return res.json(user.id);
  //.catch((err) => res.status(500).json(err));
})

// getting an error - see screenshot
