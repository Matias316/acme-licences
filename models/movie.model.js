module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.STRING
      }
    });
  
    Movie.associate = (models) => {
      Movie.belongsToMany(models.song, {through: 'track', foreignKey: 'movieId'});
      Movie.hasMany(models.movie-scene);
    };

    return Movie;
  };