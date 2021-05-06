const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/login', withAuth, async (req, res) => {
    try {
      const userData = await User.findOne({where: {email: req.body.email}});
  
      if (!userData) {
        res
          .status(400)
          .json({message: 'Email or password incorrect. Please try again.'});
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({message: 'Email or password incorrect. Please try again.'});
        return;
      }
  
      req.session.save(() => {
        req.session.id = userData.id;
        req.session.logged_in = true;
        
        res.json({user: userData, message: 'Login Successful'});
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
