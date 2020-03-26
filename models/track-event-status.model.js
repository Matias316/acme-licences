module.exports = (sequelize, DataTypes) => {
    const TrackEventStatus = sequelize.define("trackEventStatus", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.ENUM('INIT','UNDER-DISCUSSION','ACCEPTED','DENIED','CANCELLED'),
        defaultValue: 'INIT'
      }
    })
    ;

    return TrackEventStatus;
  };