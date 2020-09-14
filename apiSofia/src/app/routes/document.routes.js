'use strict';

const {Router} = require('express');
const {createDocument, pageDocument} = require('../controllers/document.controllers');


// Initializations
const router = Router();


// User routes
router.get('/document', pageDocument);
router.post('/document', createDocument);

module.exports = router;