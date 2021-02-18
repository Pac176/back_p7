const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const serveFavicon = require('serve-favicon');
const sequelize = require('./db/sequelize');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const httpStatus = require('http-status');
sequelize.initDb();

app
  .use(serveFavicon(path.join(__dirname, '/groupomania.png')))
  .use(morgan('dev'))
  .use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello, Groupomania est en construction!!!😃'));

app.use('/api/groupomania/users', userRoutes);
app.use('/api/groupomania/posts', postRoutes);
app.use('/api/groupomania/comments', commentRoutes);

app.get('*', function (req, res) {
  return res.status(httpStatus.BAD_REQUEST)
    .json('la page demandée n\'existe pas');
});

module.exports = app;
