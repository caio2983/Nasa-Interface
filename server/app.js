
require('dotenv').config();
const axios = require('axios');


console.log("TESTE",process.env.API_KEY_APOD)

const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const route_apod = require('./routes/apod'); 
const route_epic = require('./routes/epic')
const route_library = require('./routes/library')
const route_spacenews  = require('./routes/spacenews')
const route_mars = require('./routes/mars')

const apiKey_apod = process.env.API_KEY_APOD
console.log("TESTE 2",apiKey_apod)

fastify.register(require('@fastify/cors'), {
    origin:['http://localhost:4200', 'https://nasa-interface-uiqo.vercel.app/'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  });


// fastify.register(route_apod)
fastify.register(route_epic)
fastify.register(route_library)
fastify.register(route_spacenews)
fastify.register(route_mars)


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
        const date = request.params.date;  // Certifique-se de usar 'params' aqui
        console.log(`Data recebida: ${date}`);
        
        // Chamada para a API da NASA
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY_APOD}&date=${date}`);
        
        // Envia a resposta da API da NASA
        return reply.send(response.data);
        
      } catch (error) {
        // Log completo do erro
        fastify.log.error('Erro ao tentar obter dados da NASA:', {
          message: error.message,            // Mensagem do erro
          status: error.response?.status,    // Status HTTP (se disponível)
          statusText: error.response?.statusText, // Texto do status (se disponível)
          data: error.response?.data,        // Dados retornados no erro (se disponíveis)
          config: error.config,              // Configuração da requisição Axios
        });
    
        // Resposta detalhada enviada ao cliente (opcional para desenvolvimento)
        reply.status(500).send({
          error: 'Não foi possível recuperar os dados.',
          message: error.message,            // Mensagem de erro
          status: error.response?.status,    // Status HTTP (se disponível)
          statusText: error.response?.statusText, // Texto do status (se disponível)
          data: error.response?.data         // Dados retornados no erro (se disponíveis)
        });
      }
    });


    fastify.get('/spacenews', async (request, reply) => {
      try {
        console.log(reply.body);
        
     
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
  
        console.log("IMAGE LINKS",image_links)
        
        return reply.send({
          data: response.data,
          image_links: image_links
        });
      } catch (error) {
        fastify.log.error('Erro ao tentar obter dados da NASA:', {
          message: error.message,            // Mensagem do erro
          status: error.response?.status,    // Status HTTP (se disponível)
          statusText: error.response?.statusText, // Texto do status (se disponível)
          data: error.response?.data,        // Dados retornados no erro (se disponíveis)
          config: error.config,              // Configuração da requisição Axios
        });
    
        // Resposta detalhada enviada ao cliente (opcional para desenvolvimento)
        reply.status(500).send({
          error: 'Não foi possível recuperar os dados.',
          message: error.message,            // Mensagem de erro
          status: error.response?.status,    // Status HTTP (se disponível)
          statusText: error.response?.statusText, // Texto do status (se disponível)
          data: error.response?.data         // Dados retornados no erro (se disponíveis)
        });
      }
    });
    
    fastify.get('/library/:query', async (request, reply) => {
      try {
        const query = request.params.query;
     
     
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
        console.log("RESPONSE",response.data)
        
        // const responseImagesJson = await axios.get(`${response}.`)
        
        return response.data;
      } catch (error) {
        fastify.log.error(error);
        reply.status(500).send({ error: 'Não foi possível recuperar os dados.' });
      }
    });
    
  }
  
  module.exports = routes;



  
  
  