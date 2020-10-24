'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('voluntarios', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ponte: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      aniversario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      faltas: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      } 
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
