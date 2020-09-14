'use strict';

const {Schema, model} = require('mongoose');

const citySchema = new Schema({

    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }
});

module.exports = model('Ciudad', citySchema);