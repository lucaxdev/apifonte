'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('frequencia', {
      id:{
        type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        
             
      },
      id_voluntario: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      ponte: {
        type: Sequelize.STRING,
        allowNull: false
      },
      servindo: {
        type: Sequelize.STRING(15),
        allowNull: false
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

  down: (queryInterface, Sequelize) => {


    return queryInterface.dropTable('frequencia');

  }
};
