const Fastify = require('fastify');
const axios = require('axios');


async function route_epic(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;
 

 
  fastify.get('/epic/:date', async (request, reply) => {
    try {
      const date = request.query.date; 
      const date_barra = request.query.date_barra;
      console.log(reply.body);
      const image_links = [];
      
   
      const response = await axios.get(`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=${apiKey_apod}`);
      for(let response_item of response.data) {
        image_links.push(`https://api.nasa.gov/EPIC/archive/enhanced/${date_barra}/png/${response_item.image}.png?api_key=${apiKey_apod}`)

      }
      // colocar a busca por datas
      console.log("IMAGE LINKS",image_links)
      
      return reply.send({
        data: response.data,
        image_links: image_links
      });
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
    }
  });
}


module.exports = route_epic;
