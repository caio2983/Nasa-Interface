const Fastify = require('fastify');
const axios = require('axios');


async function route_library(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;

 
  fastify.get('/library/:query', async (request, reply) => {
    try {
      const tags = request.query.tags; 
      console.log(reply.body);
      
   
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${tags}`);
      
      return response.data;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}


module.exports = route_library;
