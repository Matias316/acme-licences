module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define("song", {
      title: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.INTEGER
      }
    });
  
    return Song;
  };