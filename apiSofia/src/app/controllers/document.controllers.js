'use strict';

// Dependencies
const documentController = {};
const Documento = require('../models/documentype');


documentController.pageDocument = (req, res) => {

    return res.json({
        message: 'document page here'
    });
};

documentController.createDocument = async (req, res ) => {

    let {nombre, descripcion} = req.body;

    const documento = new Documento({
        nombre, 
        descripcion
    });

    const nuevoDocumento = await documento.save();
    return res.json({
        ok:true, 
        message: 'Se ha creado un nuevo documento',
        documento: nuevoDocumento
    });
};


module.exports = documentController;
