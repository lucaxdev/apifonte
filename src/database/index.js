const Sequelize = require('sequelize');
const dbConfig = require('../config/database')



const Frequencia = require('../models/frequencia');

const Voluntarios = require('../models/voluntarios');

const connection = new Sequelize(dbConfig);



Frequencia.init(connection);

Voluntarios.init(connection);

module.exports = connection;