'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Initialiations

const app = express();



// Settings


app.set('port', process.env.PORT || 3000);


// Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




// Routes

app.use(require('./app/routes/index.routes'));


// Start Database

module.exports = app;

