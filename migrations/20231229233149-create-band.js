const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bands', {
        band_id: {
          primaryKey: true,
          type: DataTypes.SERIAl,
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bands')
  }
}
