module.exports = (sequelize, DataTypes) => {
    const MovieScene = sequelize.define("movieScene", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      movieStartTime: {
        type: DataTypes.STRING
      },
      movieEndTime: {
        type: DataTypes.STRING
      },
      movieId: {
        type: DataTypes.INTEGER
      }
    });
  
    MovieScene.associate = (models) => {
        MovieScene.belongsTo(models.movie, {foreignKey: 'movieId', as: 'movie'});
      };

    return MovieScene;
  };