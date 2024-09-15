
require('dotenv').config();

console.log("TESTE",process.env.API_KEY_APOD)

const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const route_apod = require('./routes/apod'); 

const apiKey_apod = process.env.API_KEY_APOD
console.log("TESTE 2",apiKey_apod)

fastify.register(require('@fastify/cors'), {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  });


fastify.register(route_apod)

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
 
  })