'use strict';

const mongoose = require('mongoose');

let MONGODB_URI = 'mongodb://localhost/gestionuser';
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}). then (db => console.log('Database is connected'))
.catch(error => console.log(error));