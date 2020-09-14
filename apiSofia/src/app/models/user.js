'use strict';

const {Schema, model, Mongoose, Types} = require('mongoose');

const userSchema = new Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    tipodocumento: {
        type: Schema.Types.ObjectId,
        ref: 'TipoDocumento'
    },
    documento: {
        type: String
    },
    lugarresidencia:{
        type: Schema.Types.ObjectId,
        ref: 'Ciudad'
    },
    fechanacimiento: {
        type: Date
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    usuario: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = model('Persona', userSchema);