'use strict';

// Dependencies
const cityController = {};
const city = require('../models/city');
const Ciudad = require('../models/city');


cityController.pageCity = (req, res) => {

    return res.json({
        message: 'city page here'
    });
};

cityController.createCity = async (req, res ) => {

    let {nombre, descripcion} = req.body;

    const ciudad = new Ciudad({
        nombre, 
        descripcion
    });

    const nuevaCiudad = await ciudad.save();
    return res.json({
        ok:true, 
        message: 'Se ha creado una nueva ciudad',
        ciudad: nuevaCiudad
    });
};


module.exports = cityController;