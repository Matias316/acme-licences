const routes = require('express').Router();
const movies = require('./movies');
const songs = require('./songs');
const tracks = require('./tracks');
const apis = require('./apis');

routes.get('/', (req, res) => {
    res.status(200).render('home');
  });

  routes.use('/movies', movies);
  routes.use('/songs', songs);
  routes.use('/tracks', tracks);
  routes.use('/api', apis);

  module.exports = routes;
