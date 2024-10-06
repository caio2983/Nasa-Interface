const Fastify = require('fastify');
const axios = require('axios');


async function route_mars(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;

 
  fastify.get('/marsrover/:rover_name/:sol', async (request, reply) => {
    try {
      const sol = request.params.sol; 
      const rover_name = request.params.rover_name; 
      
   
      const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?page=1&sol=${sol}&api_key=${apiKey_apod}`);
      
      return response.data;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}


module.exports = route_mars;
