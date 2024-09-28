const Fastify = require('fastify');
const axios = require('axios');

async function route_apod(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD; 


  fastify.get('/apod/:date', async (request, reply) => {
    try {
      const date = request.query.date; 
      console.log(`Data recebida: ${date}`);
      
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey_apod}&date=${date}`);
      

      return response.data;
      
    } catch (error) {

      fastify.log.error(error);

 
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}

module.exports = route_apod;
