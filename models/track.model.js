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
      }
    });

    Track.associate = (models) => {
      Track.belongsTo(models.movie);
    };

    Track.associate = (models) => {
      Track.belongsTo(models.song);
    };
  
    return Track;
  };