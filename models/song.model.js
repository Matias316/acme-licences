module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define("song", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.INTEGER
      },
      owner: {
        type: DataTypes.STRING
      }
    },
    { 
      timestamps: false
    });
  
    return Song;
  };