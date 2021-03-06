const DbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const TrackModel = require("./track.model")
const SongModel = require("./song.model")
const MovieModel = require("./movie.model")
const MovieSceneModel = require("./movie-scene.model")
const TrackEventModel = require("./track-event.model")
const TrackEventStatusModel = require("./track-event-status.model")

const sequelize = new Sequelize( {  
  dialect: DbConfig.dialect,
  storage: DbConfig.storage,
  //logging: (...msg) => console.log(msg),
  logging: false,
  pool: {
    max: DbConfig.pool.max,
    min: DbConfig.pool.min,
    acquire: DbConfig.pool.acquire,
    idle: DbConfig.pool.idle
  }
});

const Track = TrackModel(sequelize, Sequelize);
const Song = SongModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);
const MovieScene = MovieSceneModel(sequelize, Sequelize);
const TrackEvent = TrackEventModel(sequelize, Sequelize);
const TrackEventStatus = TrackEventStatusModel(sequelize, Sequelize);

Movie.belongsToMany(Song, {through: 'track', foreignKey: 'movieId'});
Movie.hasMany(MovieScene);

Song.belongsToMany(Movie, {through: 'track', foreignKey: 'songId'});

MovieScene.belongsTo(Movie, {foreignKey: 'movieId'});

Track.belongsTo(Movie, {foreignKey: 'movieId'});
Track.belongsTo(Song, {foreignKey: 'songId'});
Track.hasMany(TrackEvent);

TrackEvent.belongsTo(Track, {foreignKey: 'trackId'});
TrackEvent.hasOne(TrackEventStatus);
TrackEventStatus.belongsTo(TrackEvent, {foreignKey: 'trackEventId'});


//if force: true then DROP TABLE IF EXISTS is executed - Use this only in development
//If force: true the jest tests will failed because every execution starts a new thread and DB tables are dropped between each execution
sequelize.sync({ force: false });

module.exports = {
    Track,
    Song,
    Movie,
    MovieScene,
    TrackEvent,
    TrackEventStatus
  }