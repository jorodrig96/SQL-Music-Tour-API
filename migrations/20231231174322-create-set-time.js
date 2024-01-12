'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id:
        {
          primaryKey: true,
          type: Sequelize.SERIAl,
        },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'Event', 
          key: 'event_id' 
        }
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        
      },
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'Band', 
          key: 'band_id' 
        }
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};