module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define("track", {
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      }
    });
  
    return Track;
  };