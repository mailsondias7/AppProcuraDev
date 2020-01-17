const { Router } = require('express');


//Metodos index(ListaInformacoes),show(mostrar unico), store, update(alterar), destroy(deletar) 
const Devcontroller = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', Devcontroller.index);
routes.post('/devs', Devcontroller.store);

routes.get('/search', SearchController.index);

module.exports = routes;



