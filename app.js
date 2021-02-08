const sequelize = require('./src/db/sequelize')
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


sequelize.initDb()

app
  .use(morgan('dev'))
  .use(bodyParser.json());
  


app.get('/', (req, res) => res.send('Hello, Express!😃'));

module.exports = app;
