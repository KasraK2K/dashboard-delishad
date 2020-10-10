// express config
const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const path = require("path");

app.use(express.static("dist"));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname + "/dist/index.html"));
});

app.listen(port, () => console.log(`server started at port ${port}`));



// fastify config
// const fastify = require('fastify')({ logger: true });
// const fastifyStatic = require('fastify-static');
// const path = require("path");
// const fs = require('fs')
// const port = process.env.PORT || 8080;

// fastify.register(fastifyStatic, {
//   root: path.resolve(__dirname + '/dist/'),
// });

// const htmlFile = path.resolve(__dirname + "/dist/index.html");

// fastify.get(/.*/, async (request, reply) => {
//   reply.sendFile(htmlFile)
// });

// const start = async () => {
//   try {
//     await fastify.listen(port)
//     fastify.log.info(`server listening on ${fastify.server.address().port}`)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start()