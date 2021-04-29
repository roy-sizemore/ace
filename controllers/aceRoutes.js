const homeRoutes = require('homeRoutes');
const apiRoutes = require('api');


module.exports = (app) => {
  app.get('', (req, res) => res.json(homeRoutes));
  app.get('', (req, res) => res.json(apiRoutes));

  app.post('', (req, res) => {
    // Need to discuss how we're organizing models/views....
  });
};
