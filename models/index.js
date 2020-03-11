const DbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const TrackModel = require("./track.model")
const SongModel = require("./song.model")

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

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })
  
module.exports = {
    Track,
    Song
  }