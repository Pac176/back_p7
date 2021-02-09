const sequelize = require('./src/db/sequelize')
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const serveFavicon = require('serve-favicon');


sequelize.initDb()

app
  .use(serveFavicon(__dirname + '/groupomania.png'))
  .use(morgan('dev'))
  .use(bodyParser.json());
  


app.get('/', (req, res) => res.send('Hello, Express!😃'));

module.exports = app;
