const express = require('express');
const VoluntariosController = require('./controllers/voluntariocontroller')
const FrequenciaController = require('./controllers/frequenciaController')
// const ApoioController = require('./controllers/apoioController')
const routes = express.Router();



routes.post('/voluntarios', VoluntariosController.store);
routes.get('/voluntarios', VoluntariosController.index);
routes.put('/voluntarios/:id', VoluntariosController.updateUser);
routes.get('/voluntarios/:id', VoluntariosController.show);
routes.delete('/voluntarios/:id', VoluntariosController.delete);

   

routes.post('/frequencia', FrequenciaController.store)
routes.get('/frequencia', FrequenciaController.index)
routes.delete('/frequencia/:id', FrequenciaController.delete)

// routes.post('/apoio', ApoioController.store)
// routes.get('/apoio', ApoioController.index)
// routes.delete('/apoio/:id', ApoioController.delete)
 
routes.get('/',(req,res)=>{
    res.send('oi')
})










module.exports = routes;