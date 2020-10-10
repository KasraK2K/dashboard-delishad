// express config
// const express = require("express");
// const port = process.env.PORT || 8080;
// const app = express();
// const path = require("path");

// app.use(express.static("dist"));

// app.get(/.*/, (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/dist/index.html"));
// });

// app.listen(port, () => console.log(`server started at port ${port}`));



// fastify config
const fastify = require('fastify')({ logger: true });
const path = require("path");
const fs = require('fs')
const port = process.env.PORT || 8080;

fastify.get(/.*/, async (request, reply) => {
  const stream = fs.createReadStream(path.resolve(__dirname + "/dist/index.html"), 'text/html')
  reply.send(stream);
});

const start = async () => {
  try {
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()