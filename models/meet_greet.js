'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // band
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band" })

        Meet_Greet.belongsTo(Event, {
          foreignKey: 'event_id',
          as: 'event'
        })
      }
    }
    
  Meet_Greet.init({
    meet_greet_id: {
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
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'Band', 
        key: 'band_id' 
      }
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_Greet;
};