'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const salasRouter = require('./routes/salas');
const responsableRouter = require('./routes/responsable');
const actividadesRouter = require('./routes/actividades');


// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();
//app.use(logger('dev'));
app.use(express.json());

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Hey Filip, Woooooeeeee!!!!'
  };
  res.send(JSON.stringify(data, null, 2));
});

//ENDPOINT SALAS
app.use('/salas', salasRouter);
app.use('/responsables', responsableRouter);
app.use('/actividades', actividadesRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
