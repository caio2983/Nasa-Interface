const Fastify = require('fastify');
const axios = require('axios');


async function route_library(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;

 
  fastify.get('/library/:query', async (request, reply) => {
    try {
      const query = request.params.query;
   
   
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
     
      
      return response.data;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}



module.exports = route_library;
