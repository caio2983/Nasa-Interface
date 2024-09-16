const Fastify = require('fastify');
const axios = require('axios');

async function route_apodByDate(fastify, options,date) {
    const apiKey_apod = process.env.API_KEY_APOD;
    fastify.get('/apod/byDate/:date', async (request, reply) => {
      try {
   
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey_apod}/${date}`);
  
        return response.data;
      } catch (error) {
  
        fastify.log.error(error);
        reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
      }
    });
  }
  
  module.exports = route_apodByDate;
  