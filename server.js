'use strict';

const http = require('http');
const { readFile } = require('fs');
const { createServer } = require('http');

// const server = createServer();
const host = '127.0.0.1';
const port = process.env.PORT || 5000;

const server = createServer((req, res) => {
  readFile('index.html', function (err, file) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error');
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(file);
      res.end();
    }
  });
});

server.listen(port, host, () => { console.log('Servin\' up on ' + port); });

// readFile('./index.html', (err, file) => {
//   if (err) { throw err; }
//   const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write(file);
//     res.end();
//   });

// });
