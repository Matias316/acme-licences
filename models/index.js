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

//if force: true then DROP TABLE IF EXISTS is executed - Use this in development
sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables will be created if not exists!`)
  })
  
module.exports = {
    Track,
    Song,
    Movie,
    MovieScene,
    TrackEvent,
    TrackEventStatus
  }