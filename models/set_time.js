'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    set_time_id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'Event', 
        key: 'event_id' 
      }
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'Band', 
        key: 'band_id' 
      }
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_time;
};