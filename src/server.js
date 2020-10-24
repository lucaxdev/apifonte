const express = require('express');
const routes = require('./routes');
var cors = require('cors')


const app = express();

require('./database')
app.use(cors())
app.use(express.json());
app.use(routes)
app.use(cors())

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('A aplicação esta rodando porta: %s', port);
});

