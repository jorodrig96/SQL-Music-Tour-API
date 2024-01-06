'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
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
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        references: {
          model: 'Band', 
          key: 'band_id' 
        }
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};