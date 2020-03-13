module.exports = (sequelize, DataTypes) => {
    const TrackEvent = sequelize.define("trackEvent", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING
      },
      trackId: {
        type: DataTypes.INTEGER
      }      
    });

    TrackEvent.associate = (models) => {
      TrackEvent.belongsTo(models.track, {foreignKey: 'trackId', as: 'track'});
      TrackEvent.hasOne(models.trackEventStatus, {as: 'status'});
    };
 
    return TrackEvent;
  };