const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Eileen Bowen');
});

module.exports = routes;