'use strict';

const {Schema, model} = require('mongoose');

const documentSchema = new Schema({

    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }
});

module.exports = model('TipoDocumento', documentSchema);