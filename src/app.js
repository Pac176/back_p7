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
const helmet = require('helmet')

sequelize.initDb();

/* middleware de parametrage des heasers */
app.use((req, res, next) => {
  /* les ressources peuvent être pârtagées depuis n'importe quelle origine*/
  res.setHeader('Access-Control-Allow-Origin', '*');
  /* entetes utilisées aprés la vérification cross-origin (protocole CORS autorisé) */
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  /* N'autorise que ce serveur à fournir des scripts pour la page visitée */
  res.setHeader('Content-Security-Policy', 'default-src "self"')
  /* Methodes disponibles pour les requetes */
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app
  .use(serveFavicon(path.join(__dirname, '/groupomania.png')))
  .use(morgan('dev'))
  .use(bodyParser.json());

app.use(helmet());

app.get('/', (req, res) => res.send('Hello, Groupomania est en construction!!!😃'));

app.use('/api/groupomania/users', userRoutes);
app.use('/api/groupomania/posts', postRoutes);
app.use('/api/groupomania/comments', commentRoutes);

app.get('*', function (req, res) {
  return res.status(httpStatus.BAD_REQUEST)
    .json('la page demandée n\'existe pas');
});

module.exports = app;
