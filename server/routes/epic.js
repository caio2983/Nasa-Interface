const Fastify = require('fastify');
const axios = require('axios');


async function route_epic(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;

 
  fastify.get('/epic/:date', async (request, reply) => {
    try {
      const date = request.query.date; 
      console.log(reply.body);
      
   
      const response = await axios.get(`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=${apiKey_apod}`);
      // colocar a busca por datas
      
      return response.data;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}


module.exports = route_epic;
