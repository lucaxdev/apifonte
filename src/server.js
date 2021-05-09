const express = require('express');
const routes = require('./routes');
const sql = require('mssql');
const bodyParser = require('body-parser');
const connStr = "Server=localhost;Database=fonte;User Id=root;Password=Lucas180699;";
var cors = require('cors')


const app = express();

require('./database')
app.use(cors())
app.use(express.json());
app.use(routes)
app.use(cors())


   
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log('A aplicação esta rodando porta: %s', port);
});

