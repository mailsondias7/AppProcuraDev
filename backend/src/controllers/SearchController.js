const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        //Buscar tds os Devs num raio de 10Km
        //Filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinate: { longitude, latitude },
                    },
                    $maxdistance: 10000,
                },
            },
        });
        return response.json({ dev: [] })
    }
}
