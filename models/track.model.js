module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define("track", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      songStartTime: {
        type: DataTypes.STRING
      },
      songEndTime: {
        type: DataTypes.STRING
      },
      movieId: {
        type: DataTypes.INTEGER
      },
      songId: {
        type: DataTypes.INTEGER
      }
    });

    Track.associate = (models) => {
      Track.belongsTo(models.movie, {foreignKey: 'movieId'});
      Track.belongsTo(models.song, {foreignKey: 'songId'});
      Track.hasMany(models.trackEvent);
    };
  
    return Track;
  };