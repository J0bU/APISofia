'use strict';

// Dependencies
const userController = {};
const Persona = require('../models/user');


userController.pagePerson = (req, res) => {

    return res.json({
        message: 'person page here'
    });
};

userController.createPerson = async (req, res) => {

    let {
        nombres,
        apellidos,
        tipodocumento,
        documento,
        lugarresidencia,
        fechanacimiento,
        email,
        telefono,
        usuario,
        password 
    } = req.body;

    const persona = new Persona({
        nombres,
        apellidos,
        tipodocumento,
        documento,
        lugarresidencia,
        fechanacimiento,
        email,
        telefono,
        usuario,
        password 
    });

    const nuevaPersona  = await persona.save();

    return res.json({
        ok:true,
        message: 'Se ha creado una nueva persona',
        persona: nuevaPersona
    });

};

module.exports = userController;