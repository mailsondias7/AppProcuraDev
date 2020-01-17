const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');


//Funções do Controller
// index(listar vários), show(um unico), store, update, delete

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },


    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;


        //verifica se tem um user igual
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            //wait aguarda a resposta para prosseguir
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            //console.log(apiResponse.data);
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);


            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }

        return response.json(dev);
    }
};