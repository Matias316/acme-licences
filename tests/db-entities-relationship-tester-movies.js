const models = require('../models');
const Movie = models.Movie;
const MovieScene = models.MovieScene;

/*Test movie-scene -> Movie relationship */
  Movie.create({
    title: 'Forrest gump',
    genre: 'Comedy'
  })
  .then((newMovie) => {
    console.log(newMovie.get())
  })
  .catch((err) => {
    console.log("Error while movie creation : ", err)
  });

  MovieScene.bulkCreate([
    {movieStartTime: '00:00', movieEndTime: '00:05',  movieId: 1},
    {movieStartTime: '00:10', movieEndTime: '00:15',  movieId: 1},
    {movieStartTime: '00:15', movieEndTime: '30:00',  movieId: 1}
  ])
  .then((newScenes) => {
    console.log(newScenes)
  })
  .catch((err) => {
    console.log("Error while scenes creation : ", err)
  })
  
  // 1:N
  // Get the scenes for a given movie
  //TO-DO the relationship is not being created
  /*
  Movie.findByPk(1, {include: ['scenes']})
  .then((movie) => {
    // Get the Movie with MovieScenes (scenes) datas included
    console.log(movie)

  })
  .catch((err) => {
    console.log("Error while find movie : ", err)
  })
*/