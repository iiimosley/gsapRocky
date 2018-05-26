'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use("/", express.static(__dirname + "/"));

app.listen(port, () => console.log(`Magic on ${port}`));
