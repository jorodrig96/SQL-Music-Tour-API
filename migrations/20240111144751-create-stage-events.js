'use strict';

const { Sequelize, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
          model: 'Stage',
          key: 'stage_id',
        }
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
          model: 'Event',
          key: 'event_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};