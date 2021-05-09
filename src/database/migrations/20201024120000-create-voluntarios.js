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
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ponte: {
        type: Sequelize.STRING,
        allowNull: true
      },
      geracao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      discipulador: {
        type: Sequelize.STRING,
        allowNull: true
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_nasc: {
        type: Sequelize.STRING,
        allowNull: true
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: true
      },
      esc_lider: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('voluntarios');
  }
};
