'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};