'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_events.init({
    stage_events_id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: 'Stage', 
        key: 'stage_id' 
      }
    },
    event_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: 'Event', 
        key: 'event_id' 
      }
    }
  }, {
    sequelize,
    modelName: 'Stage_events',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_events;
};