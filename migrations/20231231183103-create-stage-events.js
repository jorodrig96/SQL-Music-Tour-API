'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};