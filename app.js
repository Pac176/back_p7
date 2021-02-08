const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan("dev"));

app.get('/', (req, res) => res.send('Hello, Express!😃'));

module.exports = app;
