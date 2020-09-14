'use strict';

const {Router} = require('express');
const {pageCity,createCity} = require('../controllers/city.controllers');

// Initializations
const router = Router();


// User routes
router.get('/city', pageCity);
router.post('/city', createCity);

module.exports = router;