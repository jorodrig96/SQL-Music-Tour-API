module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bands', {
        band_id: {
          primaryKey: true,
          type: Sequelize.SERIAl,
        },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bands')
  }
}
