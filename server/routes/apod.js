const Fastify = require('fastify');
const axios = require('axios');

async function route_apod(fastify, options) {
  const apiKey_apod = process.env.API_KEY_APOD; 


  fastify.get('/apod/:date', async (request, reply) => {
    try {
      const date = request.params.date;
 
      
      // Chamada para a API da NASA
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY_APOD}&date=${date}`);
      
      // Envia a resposta da API da NASA
      return reply.send(response.data);
      
    } catch (error) {
      // Log completo do erro
      fastify.log.error('Erro ao tentar obter dados da NASA:',  {
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

module.exports = route_apod;
