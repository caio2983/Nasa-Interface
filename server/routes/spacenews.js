const Fastify = require('fastify');
const axios = require('axios');


async function route_spacenews(fastify, options) {
//   const apiKey_apod = process.env.API_KEY_APOD;

 
  fastify.get('/spacenews', async (request, reply) => {
    try {
      const date = request.query.date; 
      console.log(reply.body);
      
   
      const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles?news_site=NASA`);
      
      return response.data;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}


module.exports = route_spacenews;
