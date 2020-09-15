import Sequelize, { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },

      username: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
      },

      phone: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true
      },

      avatar: {
        type: Sequelize.STRING(300),
        allowNull: true
      },

      firstName: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      lastName: {
        type: Sequelize.STRING(50),
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }
};
