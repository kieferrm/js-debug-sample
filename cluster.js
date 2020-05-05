/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const { slowSpellCheck } = require('./spell-check');


if (cluster.isMaster) {

  debugger;
  console.log(`Master ${process.pid} is running`);

  const mm = require('./micromatch');
  mm(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, _code, _signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {

  http.createServer((req, res) => {

    const correct = slowSpellCheck('peformance');
    console.log('peformance =>', correct);
    res.writeHead(200);
    res.end(correct);

  }).listen(8000);

  console.log(`Worker ${process.pid} started, serving http://localhost:8000`);
}
