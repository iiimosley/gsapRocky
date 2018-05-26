'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use("/", express.static(__dirname + "/"));

app.listen(port, () => console.log(`Magic on ${port}`));

// const { readFile } = require('fs');
// const { createServer } = require('http');

// // const server = createServer();
// const host = '127.0.0.1';
// const port = process.env.PORT || 5000;

// const server = createServer((req, res) => {
//   readFile('index.html', function (err, file) {
//     if (err) {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Error');
//     }
//     else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(file);
//       res.end();
//     }
//   });
// });

// server.listen(port, host, () => { console.log('Servin\' up on ' + port); });
