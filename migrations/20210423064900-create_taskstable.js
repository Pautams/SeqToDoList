'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("task", {
      id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false
        },
        taskName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        taskDescription:{
            type: Sequelize.STRING,
            allowNull: false
        },
        taskStatus:{
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt:{
            type: Sequelize.DATE,
        },
        updatedAt:{
            type: Sequelize.DATE,
        },
        deletedAt:{
            type: Sequelize.DATE,
        }
  
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("task")
  }
};
