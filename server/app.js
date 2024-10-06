
require('dotenv').config();
const axios = require('axios');



const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const route_apod = require('./routes/apod'); 
const route_epic = require('./routes/epic')
const route_library = require('./routes/library')
const route_spacenews  = require('./routes/spacenews')
const route_mars = require('./routes/mars')

const apiKey_apod = process.env.API_KEY_APOD


fastify.register(require('@fastify/cors'), {
    origin:['http://localhost:4200', 'https://nasa-interface-uiqo.vercel.app/'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  });


// // fastify.register(route_apod)
 fastify.register(route_epic)
// fastify.register(route_library)
// fastify.register(route_spacenews)
// fastify.register(route_mars)


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
 
  })

  async function routes(fastify, options) {
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


    fastify.get('/spacenews', async (request, reply) => {
      try {
    
        
     
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles?news_site=NASA`);
        
        return response.data;
      } catch (error) {
        fastify.log.error(error);
        reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
      }
    });

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
  
  module.exports = routes;



  
  
  