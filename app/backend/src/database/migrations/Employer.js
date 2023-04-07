module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('employers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(30),
        },
        age: {
          allowNull: false,
          type: Sequelize.STRING(30),
        },
        role: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('employers');
    },
  };