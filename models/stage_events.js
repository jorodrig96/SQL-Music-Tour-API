'use strict';
const { Model, DataTypes } =  require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_Events.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    stage_id: {
      type:DataTypes.SMALLINT,
      references: {
        model: 'Stage', 
        key: 'stage_id' 
      }
    },
    event_id: {
      type:DataTypes.SMALLINT,
      references: {
        model: 'Event',
        key: 'event_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stage_Events',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_Events;
};