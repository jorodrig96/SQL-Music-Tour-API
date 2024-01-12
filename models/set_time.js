'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      Set_time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band',
      })

      Set_time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      Set_time.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })
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
      allowNull: false,
      references: {
        model: 'Stage',
        key: 'stage_id'
      }
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