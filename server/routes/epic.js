const Fastify = require('fastify');
const axios = require('axios');


async function route_epic(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD;
 

 
  fastify.get('/epic/:date', async (request, reply) => {
    try {
      const date = request.params.date;
      const [year, month, day] = date.split('-'); 

      const date_barra = `${year}/${month}/${day}`;
      
      const image_links = [];
      
   
      const response = await axios.get(`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=${process.env.API_KEY_APOD}`);
      for(let response_item of response.data) {
        image_links.push(`https://api.nasa.gov/EPIC/archive/enhanced/${date_barra}/png/${response_item.image}.png?api_key=${process.env.API_KEY_APOD}`)

      }

      return reply.send({
        data: response.data,
        image_links: image_links
      });
    } catch (error) {
      fastify.log.error('Erro ao tentar obter dados da NASA:', {
        message: error.message,           
        status: error.response?.status,    
        statusText: error.response?.statusText, 
        data: error.response?.data,        
        config: error.config,            
      });
  
      
      reply.status(500).send({
        error: 'Não foi possível recuperar os dados.',
        message: error.message,           
        status: error.response?.status,  
        statusText: error.response?.statusText,
        data: error.response?.data         
      });
    }
  });
}


module.exports = route_epic;
