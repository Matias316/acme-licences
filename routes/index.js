const routes = require('express').Router();
const apis = require('./apis');

routes.use('/api', apis);

module.exports = routes;
