"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
const app = Fastify({ logger: true });

// Registre o aplicativo Fastify e as rotas
app.register(import("../server/app.js"));

export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}
