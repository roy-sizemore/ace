const trainerData = require('[TABLES FILEPATH NEEDED]');
const traineeData = require('[TABLES FILEPATH NEEDED]');

module.exports = (app) => {
  app.get('[TABLES FILEPATH NEEDED]', (req, res) => res.json(trainerData));
  app.get('[TABLES FILEPATH NEEDED (API)', (req, res) => res.json(traineeData));

  app.post('[TABLES FILEPATH NEEDED (API)]', (req, res) => {
    // Need to discuss how we're organizing models/views....
  });
};
