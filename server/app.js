
require('dotenv').config();

console.log("TESTE",process.env.API_KEY_APOD)

const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const route_apod = require('./routes/apod'); 
const route_epic = require('./routes/epic')
const route_library = require('./routes/library')
const route_spacenews  = require('./routes/spacenews')

const apiKey_apod = process.env.API_KEY_APOD
console.log("TESTE 2",apiKey_apod)

fastify.register(require('@fastify/cors'), {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  });


fastify.register(route_apod)
fastify.register(route_epic)
fastify.register(route_library)
fastify.register(route_spacenews)


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
 
  })