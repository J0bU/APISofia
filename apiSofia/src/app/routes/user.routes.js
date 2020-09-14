'use strict';


const {Router} = require('express');
const {createPerson,pagePerson} = require('../controllers/user.controllers');

// Initializations
const router = Router();


// User routes
router.get('/person', pagePerson);
router.post('/person', createPerson);

module.exports = router;