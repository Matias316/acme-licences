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
      },
      statusId: {
        type: DataTypes.INTEGER
      }         
    });

    TrackEvent.associate = (models) => {
      TrackEvent.belongsTo(models.track, {foreignKey: 'trackId', as: 'trackId'});
      TrackEvent.belongsTo(models.trackEventStatus, {foreignKey: 'statusId', as: 'statusId'});
    };
 
    return TrackEvent;
  };